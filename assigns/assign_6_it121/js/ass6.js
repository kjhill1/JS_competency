

// Selecting Element but  Tag name

var vacaItems = document.querySelectorAll('li'); 
vacaItems[1].className = 'niece';
// Store NodeList in array. array of the li
// tag name is being replaced by class of neice

// ************************************************
 

// Selecting Element using ID Atrritbute Changing CLass name by ID
var item1 = document.getElementById('one');
item1.className = 'other';

// grabbing index 1 (li #2) changing the class name from vaca to neice

// *************************************************


// Selecting an element by Class Attribute
var item3 = document.getElementsByClassName('tbd');

  if (item3.length >= 1) {  
    var numb = Math.floor(Math.random() * item3.length);
// LEARNED JUST FOR KYRRAH :):):)

    var its = item3[numb];   
    its.className = 'vaca';
  }

  // Math.floor rounds down for a full interger
  // Math.random generates randomw between 0-1 but 1 is not used 
  // multipes because it provides a number between 0 (incldues)& 1 exlcusive .99999999999999 (infinite)
  // gets full interger- rounds down to get a full number that is finds with TBD


// ********************************
// Selecting Elements by CSS Selectors

var item4 = document.querySelector('li.vaca');
item4.className = "blah";











