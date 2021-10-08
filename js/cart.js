var cartData = []


function convertirMoneda(moneda, precio) {
  if (monedaActual == "UYU") {

      if (monedaActual == moneda + precio) {
        return precio
      }
    } else {
      return precio * 40
    }
  }

document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(CART_INFO_URL).then(function (resultObj) {
    if (resultObj.status === "ok") {
      cartData = resultObj.data.articles;
      showCart();
    }
  });
});


function showCart() {

  var contenedor = document.getElementById("cart-container")

  for (var i = 0; i < cartData.length; i++) {
    const carItem = cartData[i];
    var itemPrecio = convertirMoneda(cartItem.currency, cartItem.unitCost)
    contenedor.innerHTML += `
            <div class="row p-2 cart-item">
            <div class="col-5"><img src="${cartItem.src}" class="img-fluid"></div>
            <div class="col-5"><h6 class "mt-5">${monedaActual + itemPrecio} </h5></div>
            <div class ="col-1 m-0">
            <input class="mt-5" type="number" name=$(i) min="1" max="99" onchange="updateCart(item.value, this.name)" value="${cartItem.articlesCount}>
            </div>
            <div class="col-2"><h5 class="text-center mt-5 subtotal">${monedaActual + itemPrecio * cartItem.articlesCount}</h5></div>
            </div>`

    document.getElementById("carrito").innerHTML = htmlContentToAppend;
  }
}


function updateCart(valor, id) {
  var items = document.getElementsByClassName("cart-item")
  var itemSelected = itemds[id]
  var subtotal = valor * cartData[id].unitCost
  itemSelected.getElementsByClassName("subtotal")[0].innerHTML = cartData[id].currency + subtotal

}