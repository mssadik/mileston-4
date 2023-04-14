const loadCountris = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountris(data))
}





const displayCountris = countrys =>{
    const countriesContainer = document.getElementById('section-container');
    countrys.forEach(country => {
        // console.log(country.cca2)
        const countriesDiv = document.createElement('div');
        countriesDiv.classList.add('country')
        countriesDiv.innerHTML = `
        <h1>Name: ${country.name.common} </h1>
        <h4>Capital: ${country.capital ? country.capital[0] : "No Capss"}</h4>
        <button onclick="loadCountrisCode('${country.cca2}')">Details</button>
        `
        countriesContainer.appendChild(countriesDiv);
    });
}

const loadCountrisCode = code =>{
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data =>displayCountryDetails(data[0]))
}


const displayCountryDetails = country =>{
    console.log(country)
    const countryDetailsContainer = document.getElementById('country-details-container');
    countryDetailsContainer.innerHTML = `
    <h2>Name: ${country.name.common}</h2>
    <img src="${country.flags.png}">
    `
}
loadCountris()