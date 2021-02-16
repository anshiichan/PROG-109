/* Prompt to obtain user submitted value
Validates against values greater than 10, less than 0, Null, and cancel */

while (value == '' || value == null || !(value <= 10) || !(value >= 0)) {
  var value = prompt("Please enter a number 0-10", "example: 1");
}

var table = value;             // Unit of table, from user inputted number
var operator = 'multiplication'; // Type of calculation
var i = 0;                 // Set counter to 1
var msg = '<h2>Multiplication Table</h2>';              // Message

if (operator === 'multiplication') {
  // Do multiplication
  while (i <= value) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }

}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;