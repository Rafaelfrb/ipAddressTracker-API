const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_mzCEinScHa7QTAjGtsWNZbO27JBNi&ipAddress=189.6.37.166`

const ip = "189.6.37.166";

async function getData() {

  const response = await fetch(url);

  const data = await response.json();

  return data;

  console.log('dados: ', data);

};

console.log(getData());