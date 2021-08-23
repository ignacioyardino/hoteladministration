

document.addEventListener("DOMContentLoaded", function (e) {

    document.getElementById("login").addEventListener("click", myFunction);
    function myFunction() {
        var usuario = document.getElementById("inputEmail").value
        var contrasenia = document.getElementById("inputPassword").value
        if (usuario != "" && contrasenia == "") {
            alert("Debe colocar contraseña")
        } else if (usuario == "" && contrasenia != "") {
            alert("Debe colocar el usuario")
        } else if (usuario == "" && contrasenia == "") {
            alert("Debe colocar usaurio y contraseña")
        } else if (usuario != "" && contrasenia != "") {
            window.location.href = "home.html"
            
        }

    }

});