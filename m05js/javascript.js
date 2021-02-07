var value = prompt("Please enter a number 0-10", "example: 1");  //Prompt to obtain user submitted value

/* if (value === null) {
  var value = prompt("Please enter a number 0-10", "example: 1");
}

elseif (value > 10) {
  var value = prompt("Please enter a number 0-10", "example: 1");
}

else (value < 0) {
  var value = prompt("Please enter a number 0-10", "example: 1");
} */

var table = value;             // Unit of table, from user inputted number
var operator = 'multiplication'; // Type of calculation
var i = 1;                 // Set counter to 1
var msg = '<h2>Multiplication Table</h2>';              // Message

/* if (operator === 'addition') {
  // Do addition
  while (i < 11) {
    msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
    i++;
  }
} */
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