var productoImagenes = {};

document.addEventListener("DOMContentLoaded", function (e) {
  //
  getJSONData("https://japdevdep.github.io/ecommerce-api/product/5678.json").then(function (resultObj) {
    if (resultObj.status === "ok") {
      productoImagenes = resultObj.data.images;
      var carrusel = "";
      var imagenActiva = "";
      for (var i = 0; i < productoImagenes.length; i++) {
        if (productoImagenes[i] == 0) {
          imagenActiva = `
          <div class="carousel-item active">
            <img class="d-block w-100" src="`+ productoImagenes[i] + `">
          </div>`
        } else {
          carrusel += `
          <div class="carousel-item">
            <img class="d-block w-100" src="`+ productoImagenes[i] + `">
          </div>`
        }

      }

    }
    document.getElementById("contenedorImagenesCarrousel").innerHTML = imagenActiva + carrusel;
  });

});

function getJSONData(url) {
  var result = {};
  showSpinner();
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = 'ok';
      result.data = response;
      hideSpinner();
      return result;
    })
    .catch(function (error) {
      result.status = 'error';
      result.data = error;
      hideSpinner();
      return result;
    });
}


function showSpinner() {
  document.getElementById("spinner-wrapper").style.display = "block";
}

function hideSpinner() {
  document.getElementById("spinner-wrapper").style.display = "none";
}


