const http = require("http"); 

const server = http.createServer((req, res) => {
    // logic ... 
    // req : request 로 프론트엔드로받은 데이터 
    // res : response 로 프론트엔드에게 전달하는 응답값   
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain"); // 응답헤더  
    res.end("hutzrit"); // 클라이언트에게 응답할 데이터  
});

server.listen(8080, () => {
    console.log("서버 ON")
});