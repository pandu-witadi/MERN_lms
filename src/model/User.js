//
//
const mongoose = require('mongoose')

const { schemaOption } = require('./modelOption')


const objSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    accessToken: String,
    picture: {
      type: String,
      default: "/avatar.png",
    },
    role: {
      type: [String],
      default: ["Subscriber"],
      enum: ["Subscriber", "Instructor", "Admin"],
    }
}, schemaOption )

module.exports = mongoose.model('User', objSchema)
