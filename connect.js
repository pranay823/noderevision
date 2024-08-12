const mongoose = require('mongoose')

const mongodbconnect =(url)=>{

    mongoose.connect(url)
    .then(()=>console.log("mongodb connected"))
    .catch(()=>console.log("mongodb not connected"))
} 

module.exports = {mongodbconnect}