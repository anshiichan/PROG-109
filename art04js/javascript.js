//1) create a variable to control status of each field.  Assume that they are not valid
//2) create variables to read the values from html 
//3) do the validation
//4) send error messages 
//5) return the status of each field



function validateForm(){
var errorMessages = ""; //Sets errorMessages to ""

var validFirstname=false;
var firstname = document.getElementById("firstname").value;
if (firstname==="null" || firstname==="" || firstname.length > 20)
    errorMessages += "<p>The firstname is required and cannot be greater than 20 characters</p>";
else
   validFirstname = true;



var validLastname=false;
var lastname = document.getElementById("lastname").value;
if (lastname==="null" || lastname==="" || lastname.length > 50)
    errorMessages += "<p>The lastname is required and cannot be greater than 50 characters</p>";
else
   validLastname = true;



var validEmail = false;
var userEmail = document.getElementById("email").value;
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) 
    // send error message. For example:  
errorMessages += "<p>Invalid email</p>";
else
    validEmail = true; //Or assign the value to a variable. For example validEmail = true



var validPhone = false;
var phone = document.getElementById("phone").value;





if (isNaN(phone) || phone.length >15 || phone===null || phone==="")
//send error message. For example 
errorMessages += "<p>Invalid phone number </p>";
else
  validPhone = true; //Or assign the value to a variable. For example validPhone = true;
/*
//You can also do pattern matching by using the match() method from the string object
var numbers=/^[0-9]+$/;
if (phone===null||phone ==="" ||phone.length>15|| !phone.match(numbers))
//...
else
//... */



var validUsername=false;
var username = document.getElementById("username").value;
if (username==="null" || username==="" || username.length > 12)
    errorMessages += "<p>The username is required and cannot be greater than 12 characters</p>";
else
   validUsername = true;



var validPassword=false;
var password = document.getElementById("password").value;
if (password==="null" || password==="" || password.length > 7)
    errorMessages += "<p>The password is required and cannot be greater than 7 characters</p>";
else
   validPassword = true;



var validAddress=false;
var address = document.getElementById("address").value;
if (address ==="null" || address ==="")
    errorMessages += "<p>The address is required</p>";
else
   validAddress = true;



var validCity=false;
var city = document.getElementById("city").value;
if (city ==="null" || city ==="")
    errorMessages += "<p>The city is required</p>";
else
   validCity = true;



var validState=false;
var state = document.getElementById("state").value;
if (state==="null" || state==="" || state==="000")
    errorMessages += "<p>The state is required</p>";
else
   validState = true;



var validCountry=false;
var country = document.getElementById("country").value;
if (country==="null" || country==="" || country==="000")
    errorMessages += "<p>The country is required</p>";
else
   validCountry = true;


var validZipcode = false;
var zipcode = document.getElementById("zipcode").value;
if (country ==="USA")
if (isNaN(zipcode) || zipcode.length >5 || zipcode===null || zipcode==="")
// validate Zipcode according to the rules
errorMessages += "<p>Invalid zip code </p>";
else
//Zipcode is OK. For example: 
validZipcode = true;



var comments = document.getElementById("comments").value;
var validComments = true;

document.getElementById("errorMessages").innerHTML = errorMessages;

return (validFirstname && validLastname && validEmail && validPhone && validUsername && validPassword && validAddress && validCity && validState && validCountry && validZipcode && validComments);
}
