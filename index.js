require('dotenv').config();
const pg = require('pg-promise')();
const dbConfig = {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    database: process.env.DB_NAME
};

//must pass in dbConfig in here!!!!

class Customer {
    constructor(name, email, addr, password) {
        this.db = pg(dbConfig);
        this.name = name;
        this.email = email;
        this.address = addr;
        this.password = password;
    };
    save() {
        // safe way would be to go into postgress and see what happens and copy and paste
        //where to insert? 
        // what to insert?
        return this.db.query(`
        insert into customers 
        (name, email, address, password)
        values
        ('${this.name}','${this.email}', '${this.address}', '${this.password}');
        `);    
    };
};

module.exports = Customer;


