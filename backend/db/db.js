const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGO_URL);

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    firstName: {
        type: String
    },
    
    lastName: {
        type: String
    }
});

module.exports = mongoose.module("User", userSchema);