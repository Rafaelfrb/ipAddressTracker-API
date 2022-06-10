
	fetch('https://api.ipify.org/?format=json')
	.then(results => results.json())
	.then(data => {
		console.log(data.ip);
    document.getElementById('inputip').value = data.ip;
	})

getData();

async function getData() {

  let ip = document.getElementById('inputip').value;

  let url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_mzCEinScHa7QTAjGtsWNZbO27JBNi&ipAddress=${ip}`
  console.log(url);
  const response = await fetch(url);

  const data = await response.json();

  const location =  await data.location.region;
  const country = await data.location.country;
  const isp = await data.as.name;
  const timezone = await data.location.timezone;
  const lat = await data.location.lat;
  const long = await data.location.lng;
  console.log(data);

  var map = L.map('map').setView([lat, long], 13);
  var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
  

  let html = `
                        <div class="innercontainer">
                          <p>IP ADDRESS</p>
                          <p class="info">${ip}</p>
                        </div> 

                        <div class="innercontainer">
                          <p>LOCATION</p>
                          <p class="info">${location}, ${country}</p>
                        </div>

                        <div class="innercontainer">
                          <p>TIMEZONE</p>
                          <p class="info">UTC ${timezone}</p>
                        </div>

                        <div class="innercontainer">
                          <p>ISP</p>
                          <p class="info">${isp}</p>
                        </div>  
                      </div>
                    `;

  let container = document.querySelector('.container');
  container.innerHTML = html;
};
