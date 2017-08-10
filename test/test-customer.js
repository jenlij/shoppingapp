const expect = require('chai').expect;
const Customer = require('../customer');

describe('Customers', () => {
    it('should be able to save to database', (done) => {
        let myCustomer = new Customer('me', 'me@me.com', '123 me street', 'm3m3m3');
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
            .then((result) =>{
                console.log(result);
                done();
            })
            .catch((error) => {
                console.log(error);
            })

    });    
});