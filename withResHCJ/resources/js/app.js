


const country_name_element = document.querySelector(".country .name");
const total_cases_element = document.querySelector(".total-cases .value");
const new_cases_element = document.querySelector(".total-cases .new-value");
const recovered_element = document.querySelector(".recovered .value");
const new_recovered_element = document.querySelector(".recovered .new-value");
const deaths_element = document.querySelector(".total-cases .value");
const new_deaths_element = document.querySelector(".total-cases .new-value");

const ctx = document.getElementById("line_chart").getContext("2d");
let app_data = [],
	cases_list = [],
	recovered_list = [],
	deaths_list = [],
	dates = [];


// Get Country code - GeoPlugin API
let country_code = geoplugin_countryCode();
let user_country;
country_list.forEach(country => {
	if(country.code == country_code){
		user_country = country.name;
	}
});
console.log(user_country);


/* ---------------------------------------------- */
/*                API URL AND KEY                 */
/* ---------------------------------------------- */
function fetchData(user_country){
fetch("https://covid19-monitor-pro.p.rapidapi.com/coronavirus/cases_by_country_paginated.php?limit=%3CREQUIRED%3E&page=%3CREQUIRED%3E&country=%3CREQUIRED%3E", {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "a4329d1571msh8d75aaecb8f8e3bp12a9fcjsn4ce1be5e031e",
			"x-rapidapi-host": "covid19-monitor-pro.p.rapidapi.com"
		}
	}).then(response => {
		return response.json();
	}).then( data => {
		console.log(data);
	})
}
fetchData(user_country)

