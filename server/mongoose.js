const mongoose = require("mongoose")
    mongoose.connect("mongodb+srv://syedanas:anas@food.cr9jq2n.mongodb.net/").then(()=>{
        console.log("your database base has been connected")
    }).catch((err)=>{
        console.log("error data base has not been connected " + err )
    
    })

   
module.exports = data



