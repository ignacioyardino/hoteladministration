document.addEventListener("DOMContentLoaded", function(e) {

    var perfil = JSON.parse(localStorage.getItem("USUARIOPERFIL"));
    if (perfil.USUARIO != null && perfil.CONTRASENIA != null) {



    } else {
        alert("Debe iniciar sesión");
        window.location.href = "index.html";
    }


});