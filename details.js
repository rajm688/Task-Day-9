let url = "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
fetch(url).then( response => response.json())
.then( data => {data.forEach(countries => {
        console.log(`name : ${countries.name}
        capital : ${countries.capital}
        flag: ${countries.flag}
                    `)
        
    });
})