let url = "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
fetch(url).then( response => response.json())
.then( data => {
    const reducer = (population=0, item)=> population + item.population 
    const TotalPopulation = data.reduce(reducer,0)
    console.log(TotalPopulation)
})