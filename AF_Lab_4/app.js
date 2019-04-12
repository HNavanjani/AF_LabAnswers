const os = require('os');
const fs = require('fs');
const fileName = __dirname+'/test.txt';
const dataSync = fs.readFileSync(fileName);
const outFileName = __dirname + '/test-copy.txt';
const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(outFileName);
const http = require('http');
const http2 = require('http');

//Q1
//Hello World

console.log('Hello K');

//Q2
//Use OS System Library

console.log('Architecture'+os.arch());
console.log('CPUs'+os.cpus().length);
console.log('OS'+ os.platform());

//Q3
//Read a File

fs.readFile(fileName,(err,data)=> {
    if(err) {
        console.error(err);
    }
        console.log(data.toString());
        //console.log(data);
        console.log(dataSync.toString());
    });


//Q4
//Use Streams to copy content of a File

readStream.pipe(writeStream);

readStream.on('data',data =>{
    console.log(data.toString());
});

//Q5
//HTTP Server


http.createServer((req,res) => {

    res.setHeader('Contenst-Type','text/html');
    res.write('<h1>Hello K</h1>');
    res.end();
}).listen(3000);


http2.createServer((req,res) => {

    res.setHeader('Content-Type','text/html');
    switch(req.method){
        case 'GET':
            res.write('<h1>Hello K</h1>');
            res.end();
            break;
        case 'POST':
            req.on('data',data =>{
                res.write('<h1>Hello '+ data+'</h1>');
                res.end();
            });
            break;
    }
}).listen(3000,(err) => {
    console.log('Server is listening to port 3000')
});
