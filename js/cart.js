var carrito = "";

$(document).ready(function () {

  cargoProductosDeCarrito();



});



function cargoProductosDeCarrito() {

  getJSONData(CARRITO_PERSONALIZADO).then(function (resultObj) {
    if (resultObj.status === "ok") {
      var carrito = "";
      arrayProductosDelCarrito = resultObj;
      //
      for (var i = 0; i < arrayProductosDelCarrito.data.articles.length; i++) {
        var imagen = arrayProductosDelCarrito.data.articles[i].src;
        var nombreDeProducto = arrayProductosDelCarrito.data.articles[i].name;
        var cantidadDeProductosComprados = arrayProductosDelCarrito.data.articles[i].count;
        var precioProducto = arrayProductosDelCarrito.data.articles[i].unitCost;
        var moneda = arrayProductosDelCarrito.data.articles[i].currency;
        //
        var totalPrecio = precioProducto * cantidadDeProductosComprados;
        if (moneda == "usd") {
          precioProducto = precioProducto * 45;
          moneda = "UYU";
        }
        carrito += `
          <tr>
            <td class="col-sm-8 col-md-6 principal">
              <div class="media">
                <a class="thumbnail pull-left" href="#"> 
                  <img class="media-object"src="`+ imagen + `"style="width: 72px; height: 72px;">
                </a>
                <h4 class="nombreProducto"><a href="#"> `+ nombreDeProducto + `</a></h4>
              </div>
            </td>
            <td class="col-sm-1 col-md-1 productoComprados" style="text-align: center">
              <input class="form-control" value="`+ cantidadDeProductosComprados + `">
            </td>
            <td class="col-sm-1 col-md-1 text-center"><strong>`+ precioProducto + " " + moneda + `</strong></td>
            <td class="col-sm-1 col-md-1 text-center totalPrecioContenedor"><strong>`+ totalPrecio + `</strong></td>
            <td class="col-sm-1 col-md-1">
              <button class="eliminar-producto btn btn-danger"> eliminar</button>
            </td>
          </tr> `;
      }
      document.getElementById("tablaContenedoraDeProductos").innerHTML = carrito;
    }
    $('.eliminar-producto').click(function () {
      removeItem(this);
    });


  });
}

function removeItem(botonEliminar) {
  /* Remove row from DOM and recalc cart total */
  var productRow = $(botonEliminar).parent().parent(); //CONSIGO LA ROW MEDIANTE EL "PADRE-DEL-PADRE"
  var nombreProducto = $(productRow).children('.principal').children().children('.nombreProducto').text();
  var precioProducto = $(productRow).children('.totalPrecioContenedor').children().text();

  

  console.log(precioProducto);
  $(productRow).fadeOut("slow", function () {
    $(productRow).remove();
  });


}
