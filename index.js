const db = require('./db');

//must pass in dbConfig in here!!!!

class Customer {
    constructor(name, email, addr, password) {
        this.name = name;
        this.email = email;
        this.address = addr;
        this.password = password;
    };
    save() {
        // safe way would be to go into postgress and see what happens and copy and paste
        //where to insert? 
        // what to insert?
        // returning what? (if want to return)
        return db.one(`
        insert into customers 
        (name, email, address, password)
        values
        ('${this.name}','${this.email}', '${this.address}', '${this.password}')
        returning customer_id;
        `);    
    };
    // pass in id as we are goign to search for this
    static get(id) {
        // I know I'll return something
        // arrow function protects me from this key word being redefined
        return db.one(`
            select customer_id, name, email, address from customers
                where customer_id=${id};
        `).then((result) => {
            //result is one record
            let c = new Customer();
            c.customer_id = result.customer_id;
            c.name = result.name;
            c.email = result.email;
            c.address = result.address;
            return c;
        })
    }
};

module.exports = Customer;


