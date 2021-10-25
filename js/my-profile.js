document.addEventListener("DOMContentLoaded", function(e) {

    var htmlContentToAppend = "";
    htmlContentToAppend += `

    <div class="container">

        <div class="row">
            <div class="col-sm-4" style="margin-top: 50px;">
                <div class="text-center">
                    <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" class="avatar img-circle img-thumbnail" alt="avatar">
                    <h6>Cambiar foto de perfil.</h6>
                    <input type="file" class="text-center center-block file-upload">
                </div>
                </hr><br>
            </div>

            <div class="col-sm-8" style="margin-top: 50px;">
                <h3>Mi perfil</h3>
                <div class="tab-content">
                    <div class="tab-pane active" id="home">
                        <hr>
                        <form class="form" action="##" method="post" id="registrationForm">
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
                                    <input type="password" class="form-control" name="password2" id="passwordPerfil2" placeholder="Volver a escribir contraseña">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-xs-12">
                                    <br>
                                    <button class="btn btn-success" id="botonGuardarPerfil" type="submit"><i
                                          class="glyphicon glyphicon-ok-sign"></i> Guardar</button>
                                    <button class="btn btn-danger" type="reset"><i
                                          class="glyphicon glyphicon-repeat"></i> Limpiar</button>
                                </div>
                            </div>
                        </form>

                        <hr>

                    </div>
                </div>

            </div>
        </div>
    
        <script type="text/javascript">
            $(document).ready(function() {
                var readURL = function(input) {
                    if (input.files && input.files[0]) {
                        var reader = new FileReader();

                        reader.onload = function(e) {
                            $('.avatar').attr('src', e.target.result);
                        }

                        reader.readAsDataURL(input.files[0]);
                    }
                }

                $(".file-upload").on('change', function() {
                    readURL(this);
                });
            });
        </script>
    `
    document.getElementById("contenedorDePerfil").innerHTML = htmlContentToAppend;
})
document.getElementById("botonGuardarPerfil").addEventListener("click", myFunction)

function myFunction() {
    var nombrePerfil = document.getElementById("nombrePerfil").value;
    var apellidosPerfil = document.getElementById("apellidosPerfil").value;
    var edadPerfil = document.getElementById("edadPerfil").value;
    var telefonoPerfil = document.getElementById("telefonoPerfil").value;
    var emailPerfil = document.getElementById("emailPerfil").value;
    var passwordPerfil = document.getElementById("passwordPerfil").value;
    var passwordPerfil2 = document.getElementById("passwordPerfil2").value;





    if (nombrePerfil == "" && apellidosPerfil != "" && edadPerfil != "" && telefonoPerfil != "" && emailPerfil != "" && passwordPerfil != "" && passwordPerfil2 != "") {
        alert("Debe colocar un nombre.")
    } else if (apellidosPerfil == "" && nombrePerfil != "" && edadPerfil != "" && telefonoPerfil != "" && emailPerfil != "" && passwordPerfil != "" && passwordPerfil2 != "") {
        alert("Debe colocar sus Apellido.")
    } else if (edadPerfil == "" && nombrePerfil != "" && edadPerfil != "" && telefonoPerfil != "" && emailPerfil != "" && passwordPerfil != "" && passwordPerfil2 != "") {
        alert("Debe colocar su edad.")
    } else if (telefonoPerfil == "" && nombrePerfil != "" && edadPerfil != "" && edadPerfil != "" && emailPerfil != "" && passwordPerfil != "" && passwordPerfil2 != "") {
        alert("Debe colocar su número de teléfono.")
    } else if (emailPerfil == "" && nombrePerfil != "" && edadPerfil != "" && telefonoPerfil != "" && telefonoPerfil != "" && passwordPerfil != "" && passwordPerfil2 != "") {
        alert("Debe colocar Su edad.")
    } else if (passwordPerfil == passwordPerfil2 && nombrePerfil != "" && edadPerfil != "" && emailPerfil != "" && emailPerfil != "" && passwordPerfil != "" && passwordPerfil2 != "") {
        alert("Las contraseñas no coinciden.")
    } else if (passwordPerfil2 == passwordPerfil && nombrePerfil != "" && edadPerfil != "" && emailPerfil != "" && passwordPerfil != "" && passwordPerfil2 != "") {
        alert("Las contraseñas no coinciden.")

        localStorage.setItem('nombrePerfil', nombrePerfil);
        localStorage.setItem('apellidosPerfil', apellidosPerfil);
        localStorage.setItem('edadPerfil', edadPerfil);
        localStorage.setItem('telefonoPerfil', telefonoPerfil);
        localStorage.setItem('passwordPerfil', passwordPerfil);
        localStorage.setItem('nombrePerfil', apellidosPerfil);
    }
};