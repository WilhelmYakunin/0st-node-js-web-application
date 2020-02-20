'use strict';

let fs = require( 'fs' );
let http = require( 'http' );

http.createServer( function ( req, res ) {

if (req.url.endsWith('.css')) {

let cssFile = req.url.slice(1);

fs.readFile( cssFile, ( err, data ) => {
  if ( err ) throw err;

  res.setHeader( 'content-type', 'text/css' );
  res.statusCode = 200;
  res.write( data );
  res.end(); });
} else if (req.url.endsWith('.js')) {

let jsFile = req.url.slice(1);

fs.readFile( jsFile, ( err, data ) => {
  if ( err ) throw err;

  res.setHeader( 'content-type', 'text/javascript' );
  res.statusCode = 200;
  res.write( data );
  res.end();
});
} else if (req.url.endsWith('.jpg')) {

let jpgFile = req.url.slice(1);

fs.readFile( jpgFile, ( err, data ) => {
  if ( err ) throw err;

  res.setHeader( 'content-type', 'img/jpg' );
  res.statusCode = 200;
  res.write( data );
  res.end();
});
} else {
  getPage( req.url, res );
}
}).listen(8888);

; function getPage( name, res, statusCode = 200 ) {
if ( name == '/' ) {
  name = 'page1';
}

fs.readFile('/nodejs' + '/' + name + '.html', 'utf8', ( err,data ) => {


if(!err) {
  fs.readFile( 'elems/menu.html', 'utf8', ( err, menu ) => {
    if ( err ) throw err;

data = data.replace(/\{\{menu\}\}/, menu );

    fs.readFile( 'elems/footer.html', 'utf8', ( err, footer ) => {
      if ( err ) throw err;

      data = data.replace(/\{\{footer\}\}/, footer );
      res.setHeader( 'content-type', 'text/html' );
      res.statusCode = statusCode;
      res.write( data );
      res.end();
  })
})

} else {
  if ( statusCode != 404) {
    getPage( '404', res, 404 );
  } else throw err;
}
});
}
