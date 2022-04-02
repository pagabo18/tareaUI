const { MongoClient } = require('mongodb');

const mongoUrl = 'mongodb+srv://iteso2022:eqlqMeoeTzicGBbv@cluster0.evoc1.mongodb.net/iteso_2022?retryWrites=true&w=majority';

const dotenv = require('dotenv');
dotenv.config();


const Database = {
    dbInstance: null,
    connect: () => {
        return new Promise((accept, reject) => {
            MongoClient.connect(mongoUrl, { useUnifiedTopology: true }, (err, client) => {
                if(err) {
                    reject(err);
                } else {
                    this.dbInstance = client.db();
                    accept(client);
                }
            }); //Error-first callback
        }); 
    },
    collection: (name) => {
        return this.dbInstance.collection(name);
    }
};

module.exports = Database;
