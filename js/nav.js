
document.addEventListener("DOMContentLoaded", function (e) {
  var barra =
    `<nav class="site-header sticky-top py-1 bg-dark">
      <div class="container d-flex flex-column flex-md-row justify-content-between">
        <a class="py-2 d-none d-md-inline-block" href="index.html">Inicio</a>
        <a class="py-2 d-none d-md-inline-block" href="categories.html">Categorías</a>
        <a class="py-2 d-none d-md-inline-block" href="products.html">Productos</a>
        <a class="py-2 d-none d-md-inline-block" href="sell.html">Vender</a>
        <a class="py-2 d-none d-md-inline-block" href="cart.html">Mi carrito</a>
        <a class="py-2 d-none d-md-inline-block" href="cart.html">` + localStorage.getItem("USUARIO") + `</a>
        <a class="py-2 d-none d-md-inline-block" id="cerrar_btn" href="#">Cerrar Sesión</a>
        </div>
    </nav>`
  document.getElementById("contenedordelnav").innerHTML = barra;


  document.getElementById("cerrar_btn").addEventListener("click", function () {
    localStorage.clear();
    window.location.href = "index.html";
    alert("Gracias por su visita");
  });


});
