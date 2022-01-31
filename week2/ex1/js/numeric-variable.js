var price = 5;
var quantity = 14;
var total = price * quantity;
 
var costEl = document.getElementById('cost');
costEl.textContent = '$' + total;