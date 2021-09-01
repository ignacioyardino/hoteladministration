
document.addEventListener("DOMContentLoaded", function (e) {


        if (localStorage.getItem("USUARIO") != null && localStorage.getItem("CONTRASENIA") != null) {



        } else {
            alert("Debe iniciar sesión");
            window.location.href = "index.html";
        }


});
