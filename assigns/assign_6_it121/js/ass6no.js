var vacaItems = document.querySelectorAll('li'); // Store NodeList in array

if (vacaItems.length > 0) {  // If it contains items
  console.log('if the value of vacaItems.length: ' + vacaItems.length); 

  for (var i = 0; i < vacaItems.length; i++) { // Loop through each item
      

    if(i == 2) {
        vacaItems[i].className = 'niece';
    }
   }

  //  changes color because vaca class is the indexes 2 and we are sauin the (i == 2) which means at 2 start CSS class of niece styles

  // changes to default when class niece is used
  // otherwise grey

}
