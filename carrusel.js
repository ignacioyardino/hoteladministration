var product = {};

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            product = resultObj.data;
            var productImagesHTML = document.getElementById("productImages");
            productImagesHTML.innerHTML = product.images;
           
        }
    });

    document.addEventListener("DOMContentLoaded", function (e) {
        var caurrus = `
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
           <img class="d-block w-100" src=" `+ product.images[1] + `">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="img/logojap.png" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="img/logojap.png" alt="Third slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>`
        document.getElementById("carrusel").innerHTML = caurrus;

    });

    
});