var imgURL = "";

document.addEventListener("DOMContentLoaded", function(e) {

    dibujoDatosPerfil();

    agregoListenners();
})

//////////////////////////////////

function guardarPerfil() {


    if (comprueboContrasenia()) {
        var perfil = JSON.parse(localStorage.getItem("USUARIOPERFIL"));

        var nombrePerfil = document.getElementById("nombrePerfil").value;
        var apellidosPerfil = document.getElementById("apellidosPerfil").value;
        var edadPerfil = document.getElementById("edadPerfil").value;
        var telefonoPerfil = document.getElementById("telefonoPerfil").value;
        var emailPerfil = document.getElementById("emailPerfil").value;



        perfil.USUARIO = nombrePerfil;
        perfil.CONTRASENIA = usuarioContrasenia;
        localStorage.setItem('USUARIOPERFIL', JSON.stringify({ USUARIO: perfil.USUARIO, CONTRASENIA: perfil.CONTRASENIA, IMAGENUSUARIO: imgPerfil }));
    } else {
        alert("nop");
    }



}

function agregoListenners() {
    document.getElementById("botonGuardarPerfil").addEventListener("click", function() {
        guardarPerfil();
    });

}


//COMPRUEBO CONTRASSEÑA
function comprueboContrasenia() {
    var pass = document.getElementById("usuario-contrasenia").value;
    var verificoPass = document.getElementById("verificar-contrasenia").value;
    //
    if ((pass != verificoPass) || ((pass == "" || verificoPass == ""))) {
        alert("la contraseña no es valida");
    } else return true;
}




function cargar() {

    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            console.log(reader);
            reader.onload = function(e) {

                $('#avatar').css('background-image', 'url(' + e.target.result + ')');
            }

        }
    }

    $(".file-upload").on('change', function() {
        $('#avatar').css('background-image', 'url(' + e.target.result + ')');
        readURL(this);
    });

}

function showPreview(event) {
    if (event.target.files.length > 0) {
        var src = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById("avatar");
        preview.src = src;
        preview.style.display = "block";
        //
        var fileToLoad = event.target.files[0];

        var fileReader = new FileReader();
        var imgURL;
        fileReader.onload = function(fileLoadedEvent) {
            imgURL = fileLoadedEvent.target.result; // <--- data: base64


            imgPerfil = imgURL;

        }
        fileReader.readAsDataURL(fileToLoad);

    }
}


function dibujoDatosPerfil() {

    var htmlContentToAppend = "";
    htmlContentToAppend += `

    <div class="container">
    <div class="row">
        <div class="col-sm-12" style="margin-top: 50px;">
            <h3>Mi perfil</h3>
            <div class="tab-content">
                <div class="tab-pane active" id="home">
                    <hr>
                    <form class="form" id="registrationForm">
                        <div class="form-group">

                            <div class="col-xs-6">
                                <label for="nombre">
                                  <h4>Nombre</h4>
                              </label>
                                <input type="text" class="form-control" name="nombre" id="nombrePerfil" placeholder="Introduce tu nombre completo">
                            </div>
                        </div>
                        <div class="form-group">

                            <div class="col-xs-6">
                                <label for="last_name">
                                  <h4>Apellidos</h4>
                              </label>
                                <input type="text" class="form-control" name="apellidos" id="apellidosPerfil" placeholder="Introduce tus teléfono de contacto apellidos">
                            </div>
                        </div>
                        <div class="form-group">

                            <div class="col-xs-6">
                                <label for="edad">
                                <h4>Edad</h4>
                            </label>
                                <input type="text" class="form-control" id="edadPerfil" placeholder="Introduce tu edad">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-xs-6">
                                <label for="mobile">
                                  <h4>Teléfono de contacto</h4>
                              </label>
                                <input type="text" class="form-control" name="telefono" id="telefonoPerfil" placeholder="Introduce tu teléfono de contacto">
                            </div>
                        </div>
                        <div class="form-group">

                            <div class="col-xs-6">
                                <label for="email">
                                  <h4>E-mail</h4>
                              </label>
                                <input type="email" class="form-control" name="email" id="emailPerfil" placeholder="tu@email.com">
                            </div>
                        </div>

                        <div class="form-group">

                            <div class="col-xs-6">
                                <label for="password">
                                  <h4>Contraseña</h4>
                              </label>
                                <input type="password" class="form-control"  id="usuario-contrasenia" placeholder="Introduce una contraseña">
                            </div>
                        </div>
                        <div class="form-group">

                            <div class="col-xs-6">
                                <label for="password2">
                                  <h4>Verifica la contraseña</h4>
                              </label>
                                <input type="password" class="form-control" id="verificar-contrasenia" placeholder="Volver a escribir contraseña">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-xs-12">
                                <br>
                                <button class="btn btn-success" id="botonGuardarPerfil">
                                   Guardar</button>
                                <button class="btn btn-danger" type="reset"> Limpiar</button>
                            </div>
                        </div>
                    </form>

                    <hr>

                </div>
            </div>
        </div>
    </div>
    `
    document.getElementById("contenedorDePerfil").innerHTML = htmlContentToAppend;
}