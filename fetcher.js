const fs = require('fs')
/** 
 * SETUP
 * Our usual client setup code
 * Connect to example.edu website's HTTP server using our TCP library
 * HTTP servers typically run on port 80
 *
 */
let j = ""
 const net = require('net');
 const conn = net.createConnection({ 
   host: 'example.edu',
   port: 80
 });
 conn.setEncoding('UTF8');
 conn.on('connect', () => {
    console.log(`Connected to server!`);
  
   // conn.write(`GET / HTTP/1.1\r\n`);
   j+= conn.write(`Host: example.edu\r\n`);
    //conn.write(`\r\n`);
  });
  console.log("j is",j,"end")
  const content = []
  conn.on('data', (data) => {
      content.push(data)
    console.log(data);
    conn.end();
  });
 
  const path = process.argv[3];
 
//const content = 'Some content!'

fs.writeFile(`${path}`, content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})


console.log("here  ,",content)
//create file
fs.writeFile('/Users/joe/test.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})


