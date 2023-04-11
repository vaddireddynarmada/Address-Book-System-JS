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
    
    get firstName() {
        return this.firstName;
    }

    set firstName(firstName) {
        let regex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (regex.test(firstName)) {
            this.firstName = firstName;
        }
        else {
           throw("Enter valid firstname");;
        }
    }

    get lastName() {
        return this.lastName;
    }
   
    set lastName(lastName) {
        let regex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (regex.test(lastName)) {
            this.lastName = lastName;
        }
        else {
            throw("Enter valid Lastname");;
        }
    }

    get address() {
        return this.address;
    }
    
    set address(address) {
        let regex = RegExp('^[a-zA-z0-9]{4,}$');
        if (regex.test(address)) {
            this.address = address;
        }
        else {
            throw("Enter valid Address");;
        }
    }

    get city() {
        return this.city;
    }
    
    set city(city) {
        let regex = RegExp('^[a-zA-z0-9]{4,}$');
        if (regex.test(city)) {
            this.city=city;
        }
        else {
            throw("Enter valid City");;
        }
    }

    get state() {
        return this.state;
    }
    
    set state(state) {
        let regex = RegExp('^[a-zA-z0-9]{4,}$');
        if (regex.test(state)) {
            this.state = state;
        }
        else {
           throw("Enter valid State");;
        }
    }

    get zip() {
        return this.zip;
    }
   
    set zip(zip) {
        let regex = RegExp('^([0-9]{6})$');
        if (regex.test(state)) {
            this.state = state;
        }
        else {
           throw("Enter valid Zip");;
        }
    }

    get phoneNumber() {
        return this.phoneNumber;
    }
    
    set phoneNumber(phoneNumber) {
        let regex = RegExp('^[+][0-9]{2}\\s[0-9]{10}$');
        if (regex.test(phoneNumber)) {
            this.phoneNumber = phoneNumber;
        }
        else {
           throw("Enter valid PhoneNumber");;
        }
    }

    get email() {
        return this.email;
    }
    
    set email(email) {
        let regex = RegExp('^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$');
        if (regex.test(email)) {
            this.email = email;
        }
        else {
           throw("Enter valid Email");;
        }
    }

    toString() {
        return "FirstName = " +this.firstName + ", LastName = " +this.lastName + ", Address = "
         +this.address + ", City = " +this.city + ", State = " +this.state + ", Zip = " +this.zip + ", PhoneNumber = " +
         this.phoneNumber + ", Email = " +this.email;
    }
}
module.exports = Contact;