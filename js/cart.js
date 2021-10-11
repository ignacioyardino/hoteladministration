var carrito = {};


document.addEventListener("DOMContentLoaded", function (e) {
  dibujoVariables()
  dibujoCarrito();

});

function dibujoVariables() {
  getJSONData(CART_INFO_URL).then(function (resultObj) {
    if (resultObj.status === "ok") {
      carrito = resultObj.data.articles;

      let articlesNameHTML = document.getElementById("articlesName");
      let articlesCountHTML = document.getElementById("articlesCount");
      let articlesUnitCostHTML = document.getElementById("articles.unitCost");
      let articlesCurrencyHTML = document.getElementById("articles.currency");
      let articlesSrcHTML = document.getElementById("articles.src");
      //
      articlesNameHTML.innerHTML = articles.name;
      articlesCountHTML.innerHTML = articles.count;
      articlesUnitCostHTML.innerHTML = articles.unitCost;
      articlesCurrencyHTML.innerHTML = articles.currency;
      articlesSrcHTML.innerHTML = articles.src;
    }
  });
}

function dibujoCarrito() {
  getJSONData(CART_INFO_URL).then(function (resultObj) {
    if (resultObj.status === "ok") {
      carrito = resultObj.data;
      let htmlContentToAppend = "";
      for (let i = 0; i < carrito.length; i++) {
        var carrito = dibujoCarrito(articles[i]);
        htmlContentToAppend += `
    <section>
    <!--Grid row-->
    <div class="row">

      <!--Grid column-->
      <div class="col-lg-8">

        <!-- Card -->
        <div class="mb-3">
          <div class="pt-4 wish-list">

            <h5 class="mb-4">Cart (<span>2</span> items)</h5>

            <div class="row mb-4">
              <div class="col-md-5 col-lg-3 col-xl-3">
                <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                  <img class="img-fluid w-100"
                  <img src="`+ "src: img/tree1.jpg" + `">
                  <a href="#!">
                  </a>
                </div>
              </div>
              <div class="col-md-7 col-lg-9 col-xl-9">
                <div>
                  <div class="d-flex justify-content-between">
                    <div>
                    <h4>`+ articles[i].name + `</h4>
                      <p class="mb-2 text-muted text-uppercase small">Stock: `+ articles[i].count + `</p>                      
                      <p class="mb-3 text-muted text-uppercase small">Costo:`+ articles[i].unitCost + `: M</p>
                      <p class="mb-3 text-muted text-uppercase small">`+ articles[i].currency + `</p>
                    </div>
                    <div>
                      <div class="def-number-input number-input safari_only mb-0 w-100">
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                          class="minus decrease"></button>
                        <input class="quantity" min="0" name="quantity" value="1" type="number">
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          class="plus increase"></button>
                      </div>
                      <small id="passwordHelpBlock" class="form-text text-muted text-center">
                        (Note, 1 piece)
                      </small>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <a href="#!" type="button" class="card-link-secondary small text-uppercase mr-3"><i
                          class="fas fa-trash-alt mr-1"></i> Remove item </a>
                      <a href="#!" type="button" class="card-link-secondary small text-uppercase"><i
                          class="fas fa-heart mr-1"></i> Move to wish list </a>
                    </div>
                    <p class="mb-0"><span><strong id="summary">$17.99</strong></span></p class="mb-0">
                  </div>
                </div>
              </div>
            </div>
            </section>   
            `
      }
      document.getElementById("carrito").innerHTML = htmlContentToAppend;
    }
  })
}