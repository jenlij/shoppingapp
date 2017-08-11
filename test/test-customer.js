const expect = require('chai').expect;
const Customer = require('../customer');

describe('Customers', () => {
//     console.log('one');
//   it('reads the contents of a file', (done) => {
//     console.log('two');
//     fileManipulator.readFile('hello-world.txt', (contents) => {
//       console.log('three');
//       expect(contents).to.equal('hello world\n');
//       done();
//     });
//   });
//   console.log('four');
    // console.log('one');
    it('should be able to save to database', (done) => {
        // console.log('two');
        let myCustomer = new Customer('me', 'me@me.com', '123 me street', 'm3m3m3');
        myCustomer
            .save()
            .then((result) => {
                // console.log('three');
                done();
            });
    });
        // console.log('four');
    it('should be able to get a customer from the database', (done) => {
        Customer
            .get(1)
            .then((myCustomer) =>{
                // console.log(result);
                console.log(myCustomer.name);
                console.log(myCustomer.email);
                console.log(myCustomer.address);
                console.log(myCustomer.password);
                done();
            })
            .catch((error) => {
                console.log(error);
            })

    }); 
    it('should save, provide an id, and then get via id', (done) => {
        let data = ['wonder woman', 'diana@themyscira', 'themyscira', 'justice'];
        let c1 = new Customer(...data);
        c1.save()
          .then((result) => {
              let customer_id = result.customer_id;
                    Customer.get(customer_id)
                        .then((c2) => {
                            expect(c2.name).to.equal(data[0]);
                            expect(c2.email).to.equal(data[1]);
                            expect(c2.address).to.equal(data[2]);
                            done();
                        });
         });
    });

    it('should have a customer_id when we retrieve from DB', (done) => {
        let data = ['wonder woman', 'diana@themyscira', 'themyscira', 'justice'];
        let c1 = new Customer(...data);
        c1.save()
          .then((result) => {
              let customer_id = result.customer_id;
                    Customer.get(customer_id)
                        .then((c2) => {
                            expect(c2.customer_id).to.equal(customer_id);
                            done();
                        })
                        .catch(console.log);
         });
    });
    // it('should update a user and retain new values', (done) => {
    //     // customer has id? if so, update. if not, save new.
    //     let newName = 'Diana Prince';
    //     let data = ['wonder woman', 'diana@themyscira', 'themyscira', 'justice'];
    //     let c1 = new Customer(...data);
    //     c1.save()
    //             .then((resultFromSave1) => {
    //                 c1.name = newName;
    //                 c1.save()
    //                     .then((resultFromSave2) => {
    //                         let customer_id = resultFromSave1.customer_id;
    //                         Customer.get(customer_id)
    //                             .then((c2) => {
    //                                 expect(c2.name).to.equal(newName);
    //                                  done();
    //                             })
    //                             .catch(console.log);
    //                     })
    //             })      
    //      });




    });    
       
