<script>
let links = document.querySelectorAll("nav a");

for ( let link of links) {
if (link.href == window.location.pathname) {
link.classList.add('active');
}
};
</script>