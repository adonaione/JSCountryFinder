const searchForm = document.getElementById('countryForm');
searchForm.addEventListener('submit', e => updateCountryInfo(e));
async function updateCountryInfo(e) {
    e.preventDefault();
    console.log('Fetching country info...');
    const countryName = document.getElementById('country-name').value;
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
      const data = await response.json();
        displayCountryInfo(data);

    } catch (error) {
        console.error('An error occurred:', error);
    }
}
// Display country info to user
function displayCountryInfo(data) {
    console.log('Displaying country info...');
    console.log(data);
    for (let country of data) {
        console.log(country);
    }
    const country = data[0];
    const countryInfoDiv = document.getElementById('countryInfo');
    
    countryInfoDiv.innerHTML = `
    <div class="card">
    <div class="card-body"> 
        <img src="${country.flags.png}" alt="Flag" style="width: 250px;"><br>
        <img src="${country.coatOfArms?.png}" alt="Coat of Arms" style="width: 175px;"><br>
        Country Name: ${country.name.common}<br>
        Currency: ${Object.values(country.currencies).map(currency => currency.name).join(', ')}<br>
        Capital: ${country.capital[0]}<br>
        Languages: ${Object.values(country.languages).join(', ')}<br>
    </div>
    </div>
    `;
}


