const mongoose = require('mongoose')
const Schema = mongoose.Schema



const citySchema = new Schema({
    name: String,
    temperature: String,
    condition: String,
    conditionPic: String,
    saved: Boolean
})




const City = mongoose.model("City", citySchema)
module.exports = City