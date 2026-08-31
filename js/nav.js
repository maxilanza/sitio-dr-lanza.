// Cierra los menús desplegables del nav ("Defensa" / "Víctimas") al hacer clic afuera,
// y cierra uno cuando se abre el otro.
(function () {
  var drops = document.querySelectorAll('nav.site-nav details.nav-drop');
  if (!drops.length) return;

  drops.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (d.open) {
        drops.forEach(function (other) {
          if (other !== d) other.removeAttribute('open');
        });
      }
    });
  });

  document.addEventListener('click', function (e) {
    drops.forEach(function (d) {
      if (d.open && !d.contains(e.target)) d.removeAttribute('open');
    });
  });
})();
