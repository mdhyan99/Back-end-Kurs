const express = require("express");
const app = express();

 const HTTP_PORT = 8023;


app.listen(HTTP_PORT, ()=>{
console.log(`Server running ${HTTP_PORT}`);
});

// app.get("/api",(req,res)=>{
// res.json({message:"ok"})
// })
// app.get() 
// app.put()
// app.post()
// app.delete()