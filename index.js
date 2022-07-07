function mostrarResultados(resultados) {
  const resultsEl = document.querySelector(".results-title");
  resultsEl.textContent = "Resultados: " + resultados.length;

  const resultsWrapperEl = document.querySelector(".results-wrapper");
  const templateEl = document.querySelector("#results-products-template");

  for (const r of resultados) {
    const titleEl = templateEl.content.querySelector(".product-name");
    titleEl.textContent = r.title;
    const cloneTitle = document.importNode(templateEl.content, true);

    const conditionEl = templateEl.content.querySelector(".product-condition");
    conditionEl.textContent = r.condition;
    const cloneCondition = document.importNode(templateEl.content, true);

    const soldEl = templateEl.content.querySelector(".product-sold");
    soldEl.textContent = "Vendidos: " + r.sold_quantity;
    const cloneSold = document.importNode(templateEl.content, true);

    const priceEl = templateEl.content.querySelector(".product-price");
    priceEl.textContent = "$" + r.price;
    const clonePrice = document.importNode(templateEl.content, true);

    resultsWrapperEl.appendChild(
      cloneTitle,
      cloneCondition,
      cloneSold,
      clonePrice
    );
  }
}

function main() {
  const formEl = document.querySelector(".search-form");

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const palabraBuscada = e.target.buscar.value;
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + palabraBuscada)
      .then((response) => response.json())
      .then((data) => mostrarResultados(data.results));
  });
}

main();
