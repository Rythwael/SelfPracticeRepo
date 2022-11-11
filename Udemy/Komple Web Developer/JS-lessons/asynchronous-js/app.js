
setCountry("turkey");
setCountry("germany");
setCountry("azerbaijan");

function setCountry(country) {
    const request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener("load", function () {
        const data = JSON.parse(this.responseText);
        console.log(data[0]);
        displayCountry(data[0]);
    })
}

function displayCountry(data) {
    const html = `
    <div class="col-3">
      <div class="card h-100">
        <img src="${data.flags.png}" alt="" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">${data.name.common}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Population : ${(data.population / 1000000).toFixed(1)} M</li>
          <li class="list-group-item">Capital City : ${data.capital[0]}</li>
          <li class="list-group-item">Languages : ${Object.values(data.languages)}</li>
          <li class="list-group-item">Borders : ${data.borders.toString()}</li>
        </ul>
      </div>
    </div>
    `

    document.querySelector(".row").insertAdjacentHTML("beforeend", html);
}