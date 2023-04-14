

const loadData = () =>{
        fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayData(data));
}

const displayData = countries =>{
    const countriesHtml = countries.map(country => showData(country))
    const container = document.getElementById('container');
    container.innerHTML = countriesHtml.join(' ');
}
const showData = (country) =>{
    return `
    <div class="country">
        <h2>${country.name.common}</h2>
        <img src="${country.flags.png}" alt="">
    </div>
    `
}

loadData();
