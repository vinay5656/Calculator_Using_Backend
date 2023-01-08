
const express = require("express");
const bodyParser = require("body-parser");
// const readInput = require("readline-sync");


const app = express();
app.use(bodyParser.urlencoded({extended:true}));

// app.get("/",function(req,res){
//     res.send("<h1>Hello World</h1>");
// })


app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})



app.post("/",function(req,res){
    console.log(req.body); 

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    let operationNumber = Number(req.body.operation);
    // console.log(num1, num2);
    
    if(operationNumber === 1){
        result = num1+num2;
    }else if(operationNumber === 2){
        result = num1 - num2; 
    }else if(operationNumber === 3){
        result = num1*num2;
    }else{
        result = num1/num2;
    }
    

    res.send('The addition of two number: ' + result);
})

app.listen(3040,function(){
    console.log("spin up our server on port 3040");
    
})


