// // print the total population of the countries using reduce function

const data = [
    {name : 'poland', population : 4_20_00_000},
    {name : 'moldova', population : 5_00_00_000},
    {name : 'india', population : 7_00_00_000},
    {name : 'london', population : 2_00_00_000},
    {name : 'westindies', population : 6_00_00_000}
]
const CountryPopulation = data  
       .map((name) => name.population) 
       .reduce((acc, curr) => acc + curr, 0);
       console.log(CountryPopulation, CountryPopulation/data.length);


       

// get the countries with a population of less then 2 lakhs using filter function
       const Cites = [
        {name : 'poland', population : 2_50_000},
        {name : 'moldova', population : 1_00_000},
        {name : 'india', population : 1_90_000},
        {name : 'london', population : 5_00_000},
        {name : 'westindies', population : 3_00_000}
       ]
       const bigCites = Cites .filter((b) => b.population < 2_00_000);
       console.log(bigCites);

//print the following details name, capital, flag using forEach function
const countryDetails = [
    {name :"White kingdom", capital : "Whitecity", flag : '🏳'},
    {name :"Deadly Pirate", capital : "WBlackpearl", flag : '🏴‍☠'},
    {name :"Rainbow Happiness", capital : "7colorcity", flag : '🏳‍🌈'},
    {name :"Crossed", capital : "4waycrosing", flag : '🎌'},
    {name :"trainagular Crowns", capital : "Trycutroad", flag : '🚩'}
]
 countryDetails.forEach ((countryDetails) => {
    const Details =`This is ${countryDetails.name}
    Capital is ${countryDetails.capital}
    Flag are ${countryDetails.flag}`;

    console.log(Details);

  // Print the total population of countries using reduce function
  const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
  console.log('Total Population:', totalPopulation);

  // Print the country which uses US Dollars as currency
  const countryWithUSD = data.find(country => country.currencies && country.currencies.USD);
  console.log('Country with US Dollars as currency:', countryWithUSD);
})
.catch(error => console.log('Error:', error));