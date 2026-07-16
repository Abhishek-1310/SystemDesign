class User {

    constructor(
        name,
        email,
        age,
        phone,
        address,
        company,
        country
    ) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.phone = phone;
        this.address = address;
        this.company = company;
        this.country = country;
    }

}

const user1 = new User(
    "Abhishek",
    "abc@gmail.com",
    24,
    "9999999999",
    "Hyderabad",
    "Cognizant",
    "India"
)
console.log(user1);

// What's wrong?

// Suppose we don't know the phone number.
// const user = new User(
//     "Abhishek",
//     "abc@gmail.com",
//     24,
//     null,
//     null,
//     null,
//     "India"
// );
// Now we start passing lots of null values.