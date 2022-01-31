
function calculateMpg () {
// gets the input from the form

var milesDriven = document.getElementByID
("milesDriven").value;

var gallons = document.getElementByID("gallons").value;

var mpg = document.getElementByID("mpg").value;

if (isNaN(milesDriven)|| isNaN(gallons)){
   alert("Both entries must be numeric");
   mpgform.reset();
}
else{ 
    var mpg = milesDriven / gallons;
    var mpg_output = calculateMpg.getElementByID("mpg");
    mpg_output.value = mpg.toFixed(2);
    }


window.onload = function() {
    calmpg.addEventListener('submit', calmpg);
  }
}
