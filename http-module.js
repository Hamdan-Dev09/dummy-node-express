const http = require('http');

// req stands for request and res for result
// res and req are objects
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end("Welcome to my Homepage")
    }
    else if(req.url === '/about'){
        res.end("Here is the about page");
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We don't have the page you are looking for</p>
    <a href = '/'>back home</a>`)
})


//here we are declaring port the server will listen to
// local server on port: 5000
server.listen(5000);

