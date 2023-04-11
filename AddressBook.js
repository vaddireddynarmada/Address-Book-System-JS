const Contact = require("./Contact.js");
const prompt = require('prompt-sync')();

// ability to add details to ContactDetails class
var contact = new Contact();
//Ability to add user-defined values to the PersonInfoData
contact.firstName = prompt("Enter First Name : "); 
contact.lastName = prompt("Enter Last Name : "); 
contact.address = prompt("Enter Address : "); 
contact.city = prompt("Enter City : "); 
contact.state = prompt("Enter State : "); 
contact.zip = prompt("Enter Zip : "); 
contact.phoneNumber = prompt("Enter Phone Number : "); 
contact.email = prompt("Enter Email : "); 
console.log(contact.toString());