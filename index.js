const http = require("http")

function requestControlller(){
    console.log("hola mundo!!!")
}

const server = http.createServer(requestControlller)

server.listen(3000)