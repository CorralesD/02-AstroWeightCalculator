var planets = [
  {planet: 'the Sun', gravity: 27.9},
  {planet: 'Mercury', gravity: 0.377},
  {planet: 'Venus', gravity: 0.9032},
  {planet: 'Earth', gravity: 1},
  {planet: 'Moon', gravity: 0.1655},
  {planet: 'Mars', gravity: 0.3895},
  {planet: 'Jupiter', gravity: 2.640},
  {planet: 'Saturn', gravity: 1.139},
  {planet: 'Uranus', gravity: 0.917},
  {planet: 'Neptune', gravity: 1.148},
  {planet: 'Pluto', gravity: 0.06}
];

for(var i = 0; i < planets.length; i++) {
	var planet = planets[i];

	typeof planet;

	var optionElement = document.createElement ('option');
	optionElement.value = planet.gravity;
	optionElement.innerHTML = planet.planet;

	var selectElement = document.getElementById('selectPlanet');
	selectElement.appendChild(optionElement);

};

var button = document.getElementById('calculateWeight');

button.onclick = function() {
	var inputWeight = document.getElementById('inputWeight');

	var weight = inputWeight.value;

	var selectElement = document.getElementById('selectPlanet');

	var selectedIndex = selectElement.selectedIndex;

	var selectedOption = selectElement.options[selectedIndex];

	var planetName = selectedOption.text;
	var planetValue = selectedOption.value;

	var userWeightOnPlanet = weight * planetValue;

	var message = 'If you were on ' + planetName + ', you would weigh ' + userWeightOnPlanet + 'lbs.';

	alert(message);

	var output = document.getElementById('output');

	output.innerHTML = "<div class='animated shake'>" + message + "</div>";
};