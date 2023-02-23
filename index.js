const fs = require("fs")
const http = require("http")

// fs.writeFile("index.html", "<h1> Hello World </h1><br><p> This is Parul Jaiswal</p>",(err)=> {
//     console.log("file is created")
// })
// const content = fs.readFileSync("index.html")


const server = http.createServer((req, resp) => {
    resp.writeHead(200, {'Content-type' : 'text/html'})
    fs.readFile("index.html","utf-8",(err,data) =>{
        if(err){
            resp.writeHead(404)
            resp.write("File not found")
        }
        else{
            resp.write(data)
        }
        resp.end()
    })
    // resp.end(content)
})
server.listen(5000, () => {
    console.log("server is running on port 5000")
})