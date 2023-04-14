const Contact = require("./Contact.js");
const prompt = require('prompt-sync')();
addressBook= new Array();
try{
let contact = new Contact();
contact.first=prompt("Enter FirstName Capital and Minimum 3 Characters : "); 
contact.last=prompt("Enter LastName Capital and Minimum 3 Characters : "); 
contact.addres = prompt("Enter Address minimum 4 characters : "); 
contact.cityName = prompt("Enter City minimum 4 characters : "); 
contact.stateName = prompt("Enter State minimum 4 characters : "); 
contact.zipName = prompt("Enter Zip Six Digits: "); 
contact.number = prompt("Enter Phone Number 10 Digits: "); 
contact.emailId = prompt("Enter Email : ");
addressBook.push(contact);
console.log(contact.toString());
} catch (e) {
    console.error(e);
}

