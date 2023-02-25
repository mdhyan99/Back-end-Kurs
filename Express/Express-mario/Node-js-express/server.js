// Import
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
// const {append} =require()

const requestLogger =require("./middlewares/requestLogger")
// neu Instanz
const server = express();

// statische Dateien
server.use(express.static("./public")); // für css img importieren

//Middlewares
server.use(express.urlencoded({extended:true})) 
server.use(requestLogger)
// {extended:true} kommt nicht fehler( body-parser deprecated undefined extended: provide extended option server.js:12:20)

// Template engine
server.use(expressLayouts);
server.set("layout", "./layouts/default");

server.set("view engine", "ejs");

// Routes

server.get("/", (req, res) => {
    // für index.ejs
    // res.send("Hallo Welt")
    // res.sendStatus(500)
    // res.json({message:"Hallo Welt"})
    // res.download("./server.js")
    res.render("index", { text1: "welt" });
    // res.status(500).send("fehler auf dem server")
});

const projectRouter = require("./routes/projects");
server.use("/project", projectRouter);

//WebServer an Port 3000
server.listen("3020", () => console.log("Server gestartet"));
