var myObj={name:"Danish Ali",age:21, city:"New York"}// js object
console.log(myObj)
var myJson=JSON.stringify(myObj);// jsObject to JSON
console.log(myJson)// JSON Object
//JSON to JS Object
var newjson ='{ "name":"John", "age":31, "city":"New York" }';// JSON object
console.log(newjson)

var newObj=JSON.parse(newjson);// JSON to js object
console.log(newObj);//JS object

console.log('*************************************************')

// console.log("Local Storage  work")
// localStorage.setItem("myJSON",newjson);
// var jsonstorage=localStorage.getItem('myJSON')
// console.log(jsonstorage)
// Call Stack


const bar=()=>console.log('bar')
const baz=()=>console.log('baz')
const foo=()=>{
    console.log('foo');
    setTimeout(bar,0);
    baz();
}
foo()


const http=require('http');
const fs=require('fs')
var url=require('url')
http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':"text/html"})

// var q=url.parse(req.url,true,true);//url object
// var qdata=q.query;//query object
// console.log(qdata)

// console.log(qdata.data)
// res.write(`<h1>Hello </h1>`);
// res.end();

// file system
//Async File reading

// fs.readFile('./file.txt',(err,data)=>{
//     res.writeHead(200,{'Content-Type':'text'})
//     res.write(data);
//     return res.end()
// })

//Sync File reading
// try {
//     var data=fs.readFileSync('./file.txt');
//     console.log(data);
//     res.write(data);
//     res.end()
// } catch (error) {
//     console.log(error.message)
// }





// Append to file

// fs.appendFile ('mynewfile1. txt','hello add', function (err){
// if (err) throw err;
// console.log('Saved!');
// })


//DelETE fILE


// fs.unlink('test.txt', function () {
// console.log('Delete');
// });

// Rename file

// fs.rename ('mynewfile1. txt','hello.txt', function (err){
// if (err) throw err;
// console.log('renamed!');
// })














}).listen(1990)



