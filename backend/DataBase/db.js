const mongoose = require('mongoose');
const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log(`DB connect successfully`);
    }).catch((err) => {
        console.log(`error ${err}`);
        
    })
}
module.exports = connectDB;