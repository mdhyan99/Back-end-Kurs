
import express  from "express"
import dotenv  from "dotenv"
import './lib/mongoose.js'
// import * as reports from "./controllers/kunden-controller.js";
import Router from "./routes/routes.js";

dotenv.config()


const app =express()

app.use(express.json());

// Routes
 app.get("/",(req,res)=>{ //  wenn wir suchen nach localhost:4000 zeigt uns start  seite
    res.send("Our API ${4000} cc")
 })
//  app.post("/",reports.create)
 app.use("/kunden",Router)


//  app.post("/",(req,res)=>{
//     const name =req.body.name;
//     console.log(req.body);
//     const newCategroy = new CategoryModel({name})
//     newCategroy.save().then((doc)=>{
//         res.json(doc)
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// })


// app.get("/about",(req,res)=>{  //  wenn wir suchen nach localhost:4000/about  zeigt uns about seite
//     res.send("Our about seite ${4000}")
// }) 

// app.get("/ab?cd",(req,res)=>{  //  wenn wir suchen nach localhost:4000/abcd   zeigt uns ab?cd seite aber bei /abbcd zeigt uns fehler dass bedeudet entweder one b oder kein b
//     res.send("Our /ab?cd seite ${4000}")
// }) 
// ab?cd  b one oder gannicht
// ab(cd)?cd  die innerhalb () muss wie ein buchstaben oder grupp behandel
// ab+cd b one oder mehr
// ab*cd statt * egal was wir schreiben
// /a/ was wir schreiben nach / muss a auch inhält


const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(` App runnin from ${PORT}` );
})