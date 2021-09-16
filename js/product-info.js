var product = {};
var comentarios = {};

function showImagesGallery(array) {

    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            product = resultObj.data;


            let productNameHTML = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCountHTML = document.getElementById("productCount");
            let productCriteriaHTML = document.getElementById("productCriteria");

            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCountHTML.innerHTML = product.soldCount;
            productCriteriaHTML.innerHTML = product.cost;

            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);
        }
    });

    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            comentarios = resultObj.data;

            /*   let productNameHTML  = document.getElementById("productName");
               let productDescriptionHTML = document.getElementById("productDescription");
               let productCountHTML = document.getElementById("productCount");
               let productCriteriaHTML = document.getElementById("productCriteria");
           
               productNameHTML.innerHTML = product.name;
               productDescriptionHTML.innerHTML = product.description;
               productCountHTML.innerHTML = product.soldCount; */

            //let comentarioUser = document.getElementById("comentario-user");
            //let comentarioComentario = document.getElementById("comentario-comentario");
            //let comentarioScore = document.getElementById("comentario-score");
            //let comentarioFecha = document.getElementById("comentario-fecha");
            //comentarioUser.innerHTML = comentarios[i].user;
            //comentarioComentario.innerHTML = comentarios[i].description;
            //comentarioScore.innerHTML = comentarios[i].score;
            //comentarioFecha.innerHTML = comentarios[i].dateTime;;


            let htmlContentToAppend = "";
            var estrellas = "";
            for (let i = 0; i < comentarios.length; i++) {
                if (comentarios[i].score == "1") {
                    estrellas = `
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>`;

                }
                if (comentarios[i].score == "2") {
                    estrellas = `
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>`;
                }
                if (comentarios[i].score == "3") {
                    estrellas = `
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>`;
                }
                if (comentarios[i].score == "4") {
                    estrellas = `
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>`;
                }
                if (comentarios[i].score == "5") {
                    estrellas = `
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>`;
                }


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
    });
});