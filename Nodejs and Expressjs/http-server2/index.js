const express = require("express") ; 
const bodyParser = require("body-parser")


function calcsum(n) 
{
    let ans = 0 ; 

    for(let i = 1 ; i <= n ; i++) ans += i ; 

    return ans ; 
}

const app = express() ; 
app.use(express.json()) ;
const user = {
    name : "John" , 
    kidneys : [{
        healthy : false
    }]
}

const users = [user] ; 


app.get('/',function(req,res){
    // return how many kidneys user have 

    const johnKidneys = users[0].kidneys ;
    const numberOfKidneys = johnKidneys.length ; 

    let numberOfHealthyKidneys = 0 , numberOfUnhealthyKidneys = 0 ; 

    for(let i = 0 ; i < johnKidneys.length ; i++) 
    {
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys++ ; 
        }
        else numberOfUnhealthyKidneys++ ;
    }
    

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys 
    }) ;

})




app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy ; 
    users[0].kidneys.push({
        healthy : isHealthy 
    }); 

    res.json({
        msg : "Done"
    }); 

})


app.put('/',function(req,res) { 

    for(let i = 0 ; i < users[0].kidneys.length ; i++) 
    {
        users[0].kidneys[i].healthy = true ; 
    }
    res.json({}) ; 
})

app.delete('/',function(req,res) {

    const newkidneys = [] ; 
    for(let i = 0 ; i < users[0].kidneys.length ; i++) 
    {
        if(users[0].kidneys[i].healthy) 
        {
            newkidneys.push({
                healthy : true
            }) ;
        }
    }

    users[0].kidneys = newkidneys ; 
    res.json({}) ; 
})
app.listen(3000) ; 