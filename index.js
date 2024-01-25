require("dotenv").config()
const http = require("http")

function requestControlller(){
    console.log("hola mundo!!!")
}

const server = http.createServer(requestControlller)
const PORT = process.env.PORT
server.listen(process.env.PORT,function(){

    console.log("aplicacion corriendo en puerto "+PORT)

})