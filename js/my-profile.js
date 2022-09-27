var imgPerfil = "";
var perfil = JSON.parse(localStorage.getItem("USUARIOPERFIL"));

document.addEventListener("DOMContentLoaded", function(e) {
    $("#botonGuardar").prop("disabled", true);
    agregoListenners();
    datos();
})

function datos() {

    imgPerfil = perfil.USUARIOIMAGEN;
    document.getElementById("nombre").value = perfil.USUARIO;
    document.getElementById("edad").value = perfil.USUARIOEDAD;
    document.getElementById("telefono").value = perfil.USUARIOTELEFONO;
    document.getElementById("email").value = perfil.USUARIOEMAIL;
    document.getElementById("avatar").src = perfil.USUARIOIMAGEN;

}

function guardarPerfil() {
    if (imgPerfil == "") {
        imgPerfil = "/img/usuario.png";
    }
    localStorage.setItem('USUARIOPERFIL', JSON.stringify({ USUARIO: $("#nombre").val(), CONTRASENIA: $("#contrasenia").val(), USUARIOIMAGEN: imgPerfil, USUARIOEDAD: $("#edad").val(), USUARIOEMAIL: $("#email").val(), USUARIOTELEFONO: $("#telefono").val() }));
}

function agregoListenners() {
    document.getElementById("botonGuardar").addEventListener("click", function() {
        guardarPerfil();
    });

    $("#nombre, #edad, #telefono, #email, #contrasenia").on('change paste keyup input', function() {

        var nombreValido = false;
        var edadValido = false;
        var telefonoValido = false;
        var emailValido = false;
        var contraseniaValido = false;
        //
        if ($("#nombre").val().length > 0) {
            nombreValido = true;
        } else {
            nombreValido = false;
        }
        //
        if ($("#edad").val().length > 0) {
            edadValido = true;
        } else {
            edadValido = false;
        }
        //
        if ($("#telefono").val().length > 0) {
            telefonoValido = true;
        } else {
            telefonoValido = false;
        }
        //
        if ($("#email").val().length > 0) {
            emailValido = true;
        } else {
            emailValido = false;
        }
        //
        if ($("#contrasenia").val().length > 0) {
            contraseniaValido = true;
        } else {
            contraseniaValido = false;
        }
        //
        if (nombreValido && edadValido && telefonoValido && emailValido && contraseniaValido) {
            $("#botonGuardar").prop("disabled", false);
        } else {
            $("#botonGuardar").prop("disabled", true);
        }

    });
}

/*///////////////////////////////
  ___ __  __    _    ____ _____ _   _   ____  _____ ____  _____ ___ _     
 |_ _|  \/  |  / \  / ___| ____| \ | | |  _ \| ____|  _ \|  ___|_ _| |    
  | || |\/| | / _ \| |  _|  _| |  \| | | |_) |  _| | |_) | |_   | || |    
  | || |  | |/ ___ | |_| | |___| |\  | |  __/| |___|  _ <|  _|  | || |___ 
 |___|_|  |_/_/   \_\____|_____|_| \_| |_|   |_____|_| \_|_|   |___|_____|                                                                   
/////////////////////////////////*/

function cargarImagenPerfil(event) {
    if (event.target.files.length > 0) {
        var src = URL.createObjectURL(event.target.files[0]);
        var avatar = document.getElementById("avatar");
        avatar.src = src;
        avatar.style.display = "block";
        //
        var archivoACargar = event.target.files[0];
        var lector = new FileReader();

        lector.onload = function(fileLoadedEvent) {
            imgPerfil = fileLoadedEvent.target.result; // <--- data: base64
        }
        lector.readAsDataURL(archivoACargar);

    }
}