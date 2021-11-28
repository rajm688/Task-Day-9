let url = "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
fetch(url).then( response => response.json())
.then( data => {
    const usdoller = data.filter((country)=> country.currencies.filter((crr)=> crr.code ==="USD").length >0)
    console.log(usdoller)
})