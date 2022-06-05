const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_mzCEinScHa7QTAjGtsWNZbO27JBNi&ipAddress=${ip}`

const ip = document.querySelector(".inputip");

function (ip) {
    fetch('url')
      .then(function (response)) {
        console.log(response)
    }
}