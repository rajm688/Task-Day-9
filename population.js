let url = "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
fetch(url).then( response => response.json())
.then( data => {
    const population = data.filter((country)=> country.population  > 200000)
    console.log(population)
})