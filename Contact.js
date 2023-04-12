class Contact {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;
    constructor (firstName,lastName,address,city,state,zip,phoneNumber,email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;

    }
    
    get first() {
        return this.firstName;
    }

    set first(firstName) {
        let regex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (regex.test(firstName)) {
            this.firstName = firstName;
        }
        else {
           throw("Enter valid firstname");
        }
    }

    get last() {
        return this.lastName;
    }
   
    set last(lastName) {
        let regex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (regex.test(lastName)) {
            this.lastName = lastName;
        }
        else {
            throw("Enter valid Lastname");;
        }
    }

    get addres() {
        return this.address;
    }
    
    set addres(address) {
        let regex = RegExp('^[a-zA-z0-9]{4,}$');
        if (regex.test(address)) {
            this.address = address;
        }
        else {
            throw("Enter valid Address");;
        }
    }

    get cityName() {
        return this.city;
    }
    
    set cityName(city) {
        let regex = RegExp('^[a-zA-z0-9]{4,}$');
        if (regex.test(city)) {
            this.city=city;
        }
        else {
            throw("Enter valid City");;
        }
    }

    get stateName() {
        return this.state;
    }
    
    set stateName(state) {
        let regex = RegExp('^[a-zA-z0-9]{4,}$');
        if (regex.test(state)) {
            this.state = state;
        }
        else {
           throw("Enter valid State");;
        }
    }

    get zipName() {
        return this.zip;
    }
   
    set zipName(zip) {
        let regex = RegExp('^([0-9]{6})$');
        if (regex.test(zip)) {
            this.zip = zip;
        }
        else {
           throw("Enter valid Zip");;
        }
    }

    get number() {
        return this.phoneNumber;
    }
    
    set number(phoneNumber) {
        let regex = RegExp('^[+][0-9]{2}\\s[0-9]{10}$');
        if (regex.test(phoneNumber)) {
            this.phoneNumber = phoneNumber;
        }
        else {
           throw("Enter valid PhoneNumber");;
        }
    }

    get emailId() {
        return this.email;
    }
    
    set emailId(email) {
        let regex = RegExp('^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$');
        if (regex.test(email)) {
            this.email = email;
        }
        else {
           throw("Enter valid Email");;
        }
    }

    toString() {
        return "firstName = " + this.firstName + ", lastName = " + this.lastName + ", address = " + this.address + ", city = " + this.city +
            ", state = " + this.state + ", zip = " + this.zip + ", phoneNumber = " + this.phoneNumber + ", email = " + this.email;
    }
}
module.exports = Contact;