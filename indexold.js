var fs = require('fs')

//sync

fs.writeFileSync('demo.txt','this is frist line')
var data1=fs.readFileSync('demo.txt','UTF-8')
console.log(data1)

fs.writeFileSync('demo.txt','this is second line')
var data2=fs.readFileSync('demo.txt','UTF-8')
console.log(data2)

//Async

fs.writeFile("demo.txt","Asyn data 1",function(err){
    if(err){
        console.log(err)
    }
})

var data3 = fs.readFile('demo.txt','utf-8',function(err,data){
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})

console.log(" recent data = ", data3)