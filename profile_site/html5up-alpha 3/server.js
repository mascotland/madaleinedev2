// Node Server
// Load Http Module
const http = require('http'); // All websites start start with Http
const hostname = '127.0.0.1'; //Unique Id
const port = 3000; //access point

//create server
//res- response
//req- request
const server = http.createServer((req, res) => { // request ro server
      res.statusCode = 200; // request success
      res.setHeader('Content-type', 'text/plain'); // name of website
      res.end('Hello World'); // message display
})
//make sure your listening to our server.

server.listen(port, hostname, () => { // server listening
  console.log(`Server running at http://$({port}/`); //  to check if its on the create server
  //-- or --
  //console.log(`Server running at 3000`)
})
