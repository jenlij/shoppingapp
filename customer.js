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
        return db.query(`
        insert into customers
        (name, email, address, password)
        values
        ('${this.name}', '${this.email}', '${this.address}', '${this.password}');
        `);
    }
    get(id){
        return db.one(`
        SELECT * FROM customers WHERE customer_id = ${id};
        `).then((result) => {
            this.name = result.name;
            this.email = result.email;
            this.address = result.address;
            return result;
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