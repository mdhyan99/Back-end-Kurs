import express from "express"

// import data from "./db/data.json" assert{type:"json"};


import albumRouter from "./router/albumRouter.js"
import photoRouter from "./router/photoRouter.js"



const server =express()
const port =2345


server.use("/albums",albumRouter)
server.use("/photos",photoRouter)

// photos
// await db.read()
// console.log(db.data.photos);


// albums



server.listen(port, ()=>
console.log("Server is running" + port)
)