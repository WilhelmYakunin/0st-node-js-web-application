'use strict';

let fs = require( 'fs' );
let http = require( 'http' );

http.createServer( function ( req, res ) {

if (req.url.startsWith('/public/')) {

let filePath = req.url.substr(1);

fs.readFile( filePath, ( err, data ) => {
  if ( err ) {
    res.statusCode = 404;
    res.end( "Sorry, page not found" );
  } else {
    let match;

    if ( match = filePath.match(/\.(js|css)$/)) {
      res.setHeader('Content-Type', 'text/' + match[1]);
    } else if ( match = filePath.match(/\.(jpg|png|img)$/)) {
      res.setHeader('Content-Type', 'image/' + match[1]);
    }

    res.end(data);
  }
  return;
})
} else {
  getPage( req.url, res );
}
}).listen(8888);

; function getPage( name, res, statusCode = 200 ) {
if ( name == '/' ) {
  name = 'page1';
}

fs.readFile('/nodejs/' + name + '.html', 'utf8', ( err, content ) => {

if(!err) {
  fs.readFile( '/nodejs/layouts/default.html', 'utf8', ( err, layout ) => {
    if ( err ) throw err;

layout = layout.replace(/\{\{get content\}\}/g, content );

let title = content.match(/\{\{set title "(.*?)"\}\}/);

if (title) {
  layout = layout.replace(/\{\{get title\}\}/g, title[1] );
  layout = layout.replace(/\{\{set title "(.*?)"\}\}/, '' );
}

fs.readFile( 'elems/menu.html', 'utf8', ( err, menu ) => {
  if ( err ) throw err;

  layout = layout.replace(/\{\{get menu\}\}/g, menu );

    fs.readFile( 'elems/footer.html', 'utf8', ( err, footer ) => {
      if ( err ) throw err;

      layout = layout.replace(/\{\{get footer\}\}/g, footer );

      res.setHeader( 'content-type', 'text/html' );
      res.statusCode = statusCode;
      res.write( layout );
      res.end();
  });
});
});

} else {
  if ( statusCode != 404) {
    getPage( '404', res, 404 );
  } else throw err;
}
});
}
