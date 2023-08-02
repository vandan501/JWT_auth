const mongoose=require('mongoose');

const MONGODB_URL = process.env.MONGODB_URL||"mongodb://127.0.0.1/mydatabase";

const databaseconnect=()=>{
    mongoose.
    connect(MONGODB_URL)
        .then((conn)=>{console.log(`connected to DB :${conn.connection.host}`)})
        .catch((err)=>console.log(err.message));
}

module.exports=databaseconnect;