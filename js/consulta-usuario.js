document.addEventListener("DOMContentLoaded", function(e) {

    var perfil = JSON.parse(localStorage.getItem("USUARIOPERFIL"));

    if (perfil == null || perfil == undefined) {
        alert("Debe iniciar sesión");
        window.location.href = "index.html";
    }

});