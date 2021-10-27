document.addEventListener("DOMContentLoaded", function(e) {

    var perfil = JSON.parse(localStorage.getItem("USUARIOPERFIL"));

    var barra =
        ` <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container d-flex flex-column flex-md-row justify-content-between">
        <a class="py-2 d-none d-md-inline-block" href="home.html">Inicio</a>
        <a class="py-2 d-none d-md-inline-block" href="categories.html">Categorías</a>
        <a class="py-2 d-none d-md-inline-block" href="products.html">Productos</a>
        <a class="py-2 d-none d-md-inline-block" href="sell.html">Vender</a>
        <a class="py-2 d-none d-md-inline-block"  href="cart.html">Mi carrito</a>
        <div class="dropdown">
  <button class="btn btn bg-light text-primary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   ` + perfil.USUARIO + `

  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
  <a class="dropdown-item" href="my-profile.html" type="button">Mi perfil</a>
  <a class="dropdown-item" id="cerrar_btn" type="button" href="#">Cerrar Sesión</a>
  </div>
</div>
       
      
        </div>
    </nav>`
    document.getElementById("contenedordelnav").innerHTML = barra;


    document.getElementById("cerrar_btn").addEventListener("click", function() {
        localStorage.clear();
        window.location.href = "index.html";
        alert("Gracias por su visita");
    });


});