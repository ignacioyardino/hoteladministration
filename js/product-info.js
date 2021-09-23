var product = {};
var comentarios = {};
var estrellas = "";
var newComment = "";
var arrayProductosRelacionados = {};
var arrayTodosLosProductos = {};


//
document.addEventListener("DOMContentLoaded", function (e) {
    dibujoBloquePrincipalHTML();
    //DIBUJO LOS COMENTARIOS
    dibujoComentario();
    //AGREGO LISTENER DE EVENTO CLIC EN EL BOTON DE COMENTARIO
    $("#btn-enviar-comentario").click(function () {
        dibujoComentariosNuevos();
    });
});
///
function dibujoComentariosNuevos() {
    var comentariosAtiguos = document.getElementById("comentarios").innerHTML;
    if ($("input[name='radio-puntuacion']:checked").val()) {
        var score = document.querySelector('input[name="radio-puntuacion"]:checked').value;
        estrellas = dibujoEstrellas(score, estrellas);
        var fecha = new Date().toLocaleDateString()
        var newComment = `
            <div class=" px-3" style="padding-top: 10px;padding-bottom: 10px;margin-bottom:10px; border-width: 0.10px;
            border-style: solid;
            border-color: orange;">
            <h4>`+ localStorage.getItem("USUARIO") + `</h4>
            <p>`+ $('#comentario').val() + `</p>
            <p>`+ estrellas + `</p>
            <small>`+ fecha + `</small>
            </div>`;
        document.getElementById("comentarios").innerHTML = comentariosAtiguos + newComment;
        //RESETEAR VARIABLE / RESETEO CAMPOS
        $('#comentario').val("");
        $("input[type=radio][name=radio-puntuacion]").prop('checked', false);
        estrellas = "";
    }
    else {
        alert("debe seleccionar un puntaje");
    }
}

function dibujoBloquePrincipalHTML() {
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            product = resultObj.data; //EL RESULTADO DEL JSON LO GUARDO EN UNA VARIABLE DEL PRODUCTO
            //
            //DIBUJO PARTE PRINCIPAL DEL HTML
            let productNameHTML = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCountHTML = document.getElementById("productCount");
            let costoProductoHTML = document.getElementById("costoProducto");
            //
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCountHTML.innerHTML = product.soldCount;
            costoProductoHTML.innerHTML = product.cost;
            //
            guardoProductosRelacionados(product.relatedProducts);

            dibujoGaleriaImagenes(product.images);
        }
    });
}

function dibujoGaleriaImagenes(productImages) {
    let htmlContentToAppend = "";
    for (let i = 0; i < productImages.length; i++) {
        let imageSrc = productImages[i];
        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `;
        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

function guardoProductosRelacionados(productosRelacionados) {

    arrayProductosRelacionados = productosRelacionados;

    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            var htmlContentToAppend = "";
            arrayTodosLosProductos = resultObj.data;
            for (var i = 0; i < arrayProductosRelacionados.length; i++) { // cada valor de este for recorre el otro for

                for (var j = 0; j < arrayTodosLosProductos.length; j++) {
                    if (arrayProductosRelacionados[i] == j) {
                        console.log(arrayTodosLosProductos[j]);

                        htmlContentToAppend += `
                           <div class="col-sm-4 col-md-3">
                               <div class="card-img-top">
                                        <img src="`+ arrayTodosLosProductos[j].imgSrc + `" class="img-fluid mx-auto d-block" alt="Card image cap">
                                    <div class="card-body text-center">
                                        <h4 class="card-title">
                                            <a href="#" class=" font-weight-bold text-dark text-uppercase small"> `+ arrayTodosLosProductos[j].name + `</a>
                                        </h4>
                                        <h5 class="card-price small text-warning">
                                            <i><h3>`+ arrayTodosLosProductos[j].cost + `</h3>` + arrayTodosLosProductos[j].currency + `</i>
                                        </h5>
                                    </div>
                                </div>
                            </div>`;
                    }
                }
            }
            document.getElementById("contenedor-productos-relaciomados").innerHTML = htmlContentToAppend;
        }
    });
}

function dibujoEstrellas(score, estrellas) {
    if (score == "1") {
        estrellas = `
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>`;
    }
    if (score == "2") {
        estrellas = `
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>`;
    }
    if (score == "3") {
        estrellas = `
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>`;
    }
    if (score == "4") {
        estrellas = `
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>`;
    }
    if (score == "5") {
        estrellas = `
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>`;
    }
    return estrellas;
}

function dibujoComentario() {
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            comentarios = resultObj.data;
            let htmlContentToAppend = "";
            for (let i = 0; i < comentarios.length; i++) {
                //LLAMO FUNCION PARA DIBUJAR ESRELLAS, RECIBE SCORE Y VARIABLE TEXTO VACIA
                estrellas = dibujoEstrellas(comentarios[i].score, estrellas);
                //
                htmlContentToAppend += `
                <div class=" px-3" style="padding-top: 10px;padding-bottom: 10px;margin-bottom:10px; border-width: 0.10px;
                border-style: solid;
                border-color: orange;">
                    <h4>`+ comentarios[i].user + `</h4>
                    <p>`+ comentarios[i].description + `</p>
                    <p>`+ estrellas + `</p>
                    <small>`+ comentarios[i].dateTime + `</small>
                </div>`;
                estrellas = "";
            }
            document.getElementById("comentarios").innerHTML = htmlContentToAppend;
        }
    })
}