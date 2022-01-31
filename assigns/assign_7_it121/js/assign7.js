var calmpg = document.getElementById("calmpg");

function calculateMpg (event) {
    event.preventDefault(); 
// gets the input from the form 
var mpgform = event.target;
var miles_input = mpgform.querySelector('#milesDriven').value;
var gallon_input = mpgform.querySelector('#gas').value;

if (isNaN(miles_input) || isNaN(gallon_input)){
   alert("Both entries must be numeric");
   mpgform.reset();
}
else{ 
    var mpg = miles_input / gallon_input;
    var mpg_output = mpgform.querySelector('#mpg');
    mpg_output.value = mpg.toFixed(2);
    console.log(mpg);
    }
}

window.onload = function() {
    calmpg.addEventListener('submit', calculateMpg);
  }