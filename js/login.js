

document.addEventListener("DOMContentLoaded", function (e) {

    document.getElementById("btnLogin").addEventListener("click", myFunction)

    function myFunction() {
        var usuario = document.getElementById("imputUser").value
        var contrasenia = document.getElementById("imputPass").value
        if (usuario != "" && contrasenia == "") {
            alert("Debe colocar contraseña.")
        } else if (usuario == "" && contrasenia != "") {
            alert("Debe colocar el usuario.")
        } else if (usuario == "" && contrasenia == "") {
            alert("Debe colocar usaurio y contraseña.")
        } else if (usuario != "" && contrasenia != "") {

            localStorage.setItem('USUARIO', usuario);
            localStorage.setItem('CONTRASENIA', contrasenia);


            window.location.href = "home.html"


        }

    }

});
