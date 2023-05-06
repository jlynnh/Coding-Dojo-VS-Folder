const express = require("express");
const app = express();
const port = 8000;

const faker = require('@faker-js/faker')

function createUser() {
    const newUser = {
        password: faker.internet.password(20, true, [A-Z]),
        email: faker.internet.exampleEmail({allowSpecialCharacters: true }),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid()
    };
    return newUser;
}

const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCodeByState(),
        country: faker.address.country()
    };
    return newCompany;
};

const newFakeUser = createUser();
console.log(newFakeUser);

const newFakeCompany = newCompany();
console.log(newFakeCompany);

app.get('/', (req, res) => {
    res.send(newFakeUser, newFakeCompany);
});

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
});

