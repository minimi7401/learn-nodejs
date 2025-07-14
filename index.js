const http = require("http"); 
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // logic ... 
    // req : request 로 프론트엔드로받은 데이터 
    // res : response 로 프론트엔드에게 전달하는 응답값   
    // res.statusCode = 200;
    // res.setHeader("Content-Type", "text/plain"); // 응답헤더  
    // res.end("hutzrit"); // 클라이언트에게 응답할 데이터  
    if (req.method === "GET") {
        // 조건식 true 인 경우 실행  
        if (req.url === '/') {
            // index.html 응답 
            fs.readFile(path.join(__dirname, "index.html"), 'utf-8', (err, data) => {
                if (err) {
                    res.statusCode = 500; 
                    res.end("Error")
                } else {
                    res.statusCode = 200; 
                    res.setHeader("Content-Type", "text/html"); 
                    res.end(data) 
                }
            })
        } else if (req.url === '/about') {

            fs.readFile(path.join(__dirname, "about.html"), 'utf-8', (err, data) => {
                if (err) {
                    res.statusCode = 500; 
                    res.end("Error")
                } else {
                    res.statusCode = 200; 
                    res.setHeader("Content-Type", "text/html"); 
                    res.end(data) 
                }
            })

            
        } else { //contact 
            fs.readFile(path.join(__dirname, "contact.html"), 'utf-8', (err, data) => {
                if (err) {
                    res.statusCode = 500; 
                    res.end("Error")
                } else {
                    res.statusCode = 200; 
                    res.setHeader("Content-Type", "text/html"); 
                    res.end(data) 
                }
            })
        }
    }
});
            

server.listen(8080, () => {
    console.log("서버 ON");
    console.log("🚀__dirname:", __dirname);
    
});


// 정적파일 서빙  
// index.html, about.html, contact.html 
