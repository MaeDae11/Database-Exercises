const expect = require('chai').expect;
const Customer = require('../index');

describe('Customers', () => {
    //expect to recieve done
    it("should be able to save to the database", (done) => {

        let myCustomer = new Customer('me', 'me@me.com', '123 me street', 'm2m2m2');
        myCustomer
            .save()
            .then((result) => {
                done();
            });
    });
    it('should be able to get a customer from the database', (done) => {
        let myCustomer = new Customer();
        myCustomer
            .get(1)
            .then((result) => {
                console.log(myCustomer.name);
                console.log(myCustomer.email);
                console.log(myCustomer.address);
                // mycustomer.password should be undefined because never assigned it in index.js get(id) function
                console.log(myCustomer.password);
                //envokes done
                done();
            })
    })
});