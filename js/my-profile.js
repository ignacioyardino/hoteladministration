function dibujoDatosPerfil() {

    var htmlContentToAppend = "";
    htmlContentToAppend += `

    <div class="container">

        <div class="row">
            <div class="col-sm-4" style="margin-top: 50px;">
                <div class="text-center">
                    <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" id="avatar" class="avatar img-circle img-thumbnail" alt="avatar">
                    <h6>Cambiar foto de perfil.</h6>
                    <input id="subirIMG" type="file" class="text-center center-block file-upload">
                </div>
                </hr><br>
            </div>

            <div class="col-sm-8" style="margin-top: 50px;">
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
                                    <input type="password" class="form-control" name="password" id="passwordPerfil" placeholder="Introduce una contraseña">
                                </div>
                            </div>
                            <div class="form-group">

                                <div class="col-xs-6">
                                    <label for="password2">
                                      <h4>Verifica la contraseña</h4>
                                  </label>
                                    <input type="password" class="form-control" name="password2" placeholder="Volver a escribir contraseña">
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


document.addEventListener("DOMContentLoaded", function(e) {

    dibujoDatosPerfil();

    agregoListenners();
})

//////////////////////////////////

function guardarPerfil() {
    var nombrePerfil = document.getElementById("nombrePerfil").value;
    var apellidosPerfil = document.getElementById("apellidosPerfil").value;
    var edadPerfil = document.getElementById("edadPerfil").value;
    var telefonoPerfil = document.getElementById("telefonoPerfil").value;
    var emailPerfil = document.getElementById("emailPerfil").value;
    var passwordPerfil = document.getElementById("passwordPerfil").value;

    localStorage.setItem('USUARIOPERFIL', JSON.stringify({ USUARIO: nombrePerfil, APELLIDOSPERFIL: apellidosPerfil, EDADPERFIL: edadPerfil }));

}

function agregoListenners() {
    document.getElementById("botonGuardarPerfil").addEventListener("click", function() {
        guardarPerfil();
    });
    document.getElementById("subirIMG").addEventListener("click", function() {
        cargar();
    });
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