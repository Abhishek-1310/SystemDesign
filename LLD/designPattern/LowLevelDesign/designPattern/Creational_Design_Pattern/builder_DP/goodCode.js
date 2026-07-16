// Builder Pattern constructs complex objects step by step, making object creation more readable, flexible, and maintainable, 
// especially when many optional parameters are involved.
class UserBuilder {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    setAge(age) {
        this.age = age;
        return this; //  method chaining
    }

    setPhone(phone) {
        this.phone = phone;
        return this;
    }

    setAddress(address) {
        this.address = address;
        return this;
    }

    setCompany(company) {
        this.company = company;
        return this;
    }

    setCountry(country) {
        this.country = country;
        return this;
    }

    build() {
        return new User(this);
    }

}

const user1 = new UserBuilder('abhishek', '@abhigmail.com')
    .setAge(24)
    .setCountry('india')
    .setCompany('cognizant');

console.log(user1);

// Notice that we only set the fields we care about.