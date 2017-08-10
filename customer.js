require('dotenv').config();
const db = require('./db')
// const pg = require('pg-promise')();
// const dbConfig = {
//     host: process.env.DB_HOST,
//     username: process.env.DB_USER,
//     database: process.env.DB_NAME
// };
// const db = pg(dbConfig);
class Customer {
    constructor(name, email, addr, pw) {
        // this.db = pg(dbConfig);
        this.name = name;
        this.email = email;
        this.address = addr;
        this.password = pw;
    }
    save() {
        if (this.customer_id) {
            return db.one(`
                update customers
                set 
                    name = ${this.name},
                    email = ${this.email},
                    address = ${this.address}
                where customer_id = ${this.customer_id}
            `);
        }
        else {
            return db.one(`
            insert into customers
            (name, email, address, password)
            values
            ('${this.name}', '${this.email}', '${this.address}', '${this.password}')
            returning customer_id;
            `);
        }
    }
    static get(id){ //static makes method belong to class not instance
        return db.one(`
        SELECT * FROM customers WHERE customer_id = ${id};
        `).then((result) => {
            let c = new Customer();
            c.customer_id = result.customer_id;
            c.name = result.name;
            c.email = result.email;
            c.address = result.address;
            return c;
        });
    }

}
module.exports = Customer;


//npm run test-watch


// var db = require('db')
// db.connect({
//   host: process.env.DB_HOST,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS
// })