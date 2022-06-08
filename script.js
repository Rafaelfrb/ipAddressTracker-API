let ip = "189.6.37.166"; //default IP for when the page is opened

const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_mzCEinScHa7QTAjGtsWNZbO27JBNi&ipAddress=${ip}`

async function getData() {

  const response = await fetch(url);

  const data = await response.json();

  const location =  data.location.region;
  const country = data.location.country;
  const isp = data.as.name;
  const timezone = data.location.timezone;
  const lat = data.location.lat;
  const long = data.location.lng;

  console.log(data);

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

getData();
