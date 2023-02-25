const express = require("express");
const app = express();

// app.use(express.json()) // kann Json lesen
// app.use(express.urlencoded()) // kann die data lesen
// app.use(express.static()) // kann die bilder in unser app lesen

app.use((req,res,next)=>{
   req.user={
    username:'code with '
   }
    next()
})
app.use('/',(req,res)=>{
    res.send(req.user)
})
// gibt uns zurück
//{"username":"code with "}


app.use((err,req,res)=>{
    
})


//// 

// const authMid = (req,res,next )=>{
//     const user= false
//     if(!user) return res.status(401).send('you are not logged in')
//     req.user =user
//     next()
//  }
//  const router = express.Router()

//  router.get('/', [authMid],(req,res) =>{
//     res.send(req.user)
//  })

//  app.use('/',router)

//  app.use('/login',(req,res)=>{
//     res.send("login now")

// })

app.listen(5033)