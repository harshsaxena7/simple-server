const { request } = require('express');
const express = require('express')

const app =express();

app.set("name","harsh");
console.log(app.get("name"));

app.get("/", function(req,res)
{
    res.send(OK ,request received)

})
app.listen(8000,function(){
    console.log("server is up");
});