//1) create a variable to control status of each field.  Assume that they are not valid
//2) create variables to read the values from html 
//3) do the validation
//4) send error messages 
//5) return the status of each field



function validateForm(){
var errorMessages = ""; //Sets errorMessages to ""

var validName=false;
var name = document.getElementById("name").value;
if (name==="null" || name==="")
    errorMessages += "<p>Name is a required field</p>";
else
   validName = true;



var validEmail = false;
var userEmail = document.getElementById("email").value;
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) 
    // send error message. For example:  
errorMessages += "<p>Invalid email</p>";
else
    validEmail = true; //Or assign the value to a variable. For example validEmail = true



var validComments = false;
var comments = document.getElementById("comments").value;
if (comments ==="null" || comments ==="")
    errorMessages += "<p>Comments is a required field</p>";
else
var validComments = true;

document.getElementById("errorMessages").innerHTML = errorMessages;

return (validName && validEmail && validComments);
}