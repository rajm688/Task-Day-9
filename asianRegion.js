let url = "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
fetch(url).then( response => response.json())
.then( data => {
    const asiaRegions = data.filter((country)=> country.region === "Asia")
    console.log(asiaRegions)
})