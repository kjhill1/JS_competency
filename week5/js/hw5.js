// need prompt to allow user to enter scores 

// need to use alert to display average score

// need var to store the: average, number of input, score total.

var inputTotal = 0;
var inputCount = 0;
var average = inputTotal / inputCount;
var entry;


// prompt that allows users to enter scores

do{
entry = parseInt(prompt('Enter test score\nOR enter 999 to end entries'));
inputTotal += entry;
inputCount ++; 
}
