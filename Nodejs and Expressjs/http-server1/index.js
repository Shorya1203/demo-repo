
const express = require('express') 

const bodyParser = require('body-parser') ; 
const port = 3000 

const app = express() ; 
app.use(bodyParser.json()) ;
app.get('/',function(req,res) {
    res.send("Hello World!") ; 
})


app.get('/route-handler',function(req,res){
    
    const obj = {
        name : "shorya" ,
        age : 21 
    }; 
    res.send(obj) ;
})

app.post('/conversations', function(req,res){
    console.log(req.body) ; 
    res.send({
        msg : "2 + 2 is 4" 
    })
}) 

app.listen(port, function(){
    console.log(`Example app listening on port ${port}`)
});