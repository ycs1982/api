const mongoose = require("mongoose")

function Connect(){
    mongoose.connect(process.env.MONGODB_URI,{

    }).then(() => {
        console.log("Conexão com o mongo db estabelecida com sucesso")

    }).catch(error = >{
        console.logo("error ao conectar com o mongo DB", error)
    })
}

module.exports = Connect