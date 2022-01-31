var x;
var y;
var total;

x = 5;
y = 7;
 
total = x + y;
 
var el = document.getElementById("total");

// element "content" is the text that is below (the sun of...) and the above var (x & y) are filling in at id "element" 

el.textContent= `the sum of ${x} + ${y} = ${total}`;

// textContent is part of JavaScript that indicates that there is test (intuitve) 
