const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
let database
async function getDatabase() {
    const clinet=await mongoClient.connect('mongodb://127.0.0.1:27017')
    database=clinet.db('bookdemo1')
    if(!database){
        console.log('Database not connected');
    }
    return database
}
module.exports={getDatabase}