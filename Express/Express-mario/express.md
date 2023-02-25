## Express
1 - wir schreiben in Terminal 
```js
  a- npm init -y für (packag.json)

  b- wir erstellen server.js

  c- npm install express  für (node_modules und  dependencies express )

  d- wir schreiben in server.js Import express und Instaz
  und listen("3000)...

  e- in package.json wir schreiben in scripts ("dev":"nodemon server.js",) 

  f- wir schreiben in Terminal npm run dev für die Server läuft
 ```

 2- in server.js
  ```js
  a-  wir schreiben 
  server.get('/',(req,res)=>{
    // res.send("Hallo Welt")
    res.sendStatus(500)
})

 b- in server.js  server.get('/',(req,res)=>{
     res.render("index")
})
 c-   wir schreiben in terminal 
 npm install ejs
dann (server.set("view engine","ejs"))
dann erstellen wir  index.ejs und schreiben eir was wir wollen
 dann zeigt uns was im index.ejs steht
 
 d-  wenn wir schreiben 
  b- in server.js  server.get('/',(req,res)=>{
     res.render("index",{text:"Hallo"})
})
und im index.ejs wir mussen
<% text %> dann zeigt uns in browser Hallo

 ```
3- für layout und routes
```js
a- in terminal 
npm install express-ejs-layouts

b- importiren 
const expressLayouts = require("express-ejs-layouts")
dann server.use(expressLayouts)

b- wir erstellen in views Ordener layouts
dann datei default.ejs wir schriben in diese datei 
<%- bode %>  dann in 
index.ejs lassen wir nur <h1>Hallo <%= locals.text %></h1>
gleiche mit projectliste
unter use 
server.set("layout",'./layouts/default')

c- in server.js schreiben 
```
## css und javascript und img verbinden
```js
a- wir erstellen Ordner public dann ordner css js img ..
dann in css erstellen wir style.css 

b-  in  default.ejs schreiben   
//   (  <link rel="stylesheet" href="/css/style.css" > )
wichtig mit anfang /

    

c- in server.js 
server.use(express.static("./public")); // für css img importieren

 

```
## middlewares
```js
a- wir erstellen haubt ordner dann datei requestLogger.js
  dann in diese datei schreiben wir: (function requistLogger(req,res,next){
    console.log(req.originalUrl);
    next()
}
module.exports =requistLogger)

b- wir importiern dise datei in server.js 
wir schreiben
const requistLogger =require("./middlewares/requestLogger")

dan unten 
server.use(express.urlencoded({extended:true})) 
server.use(requistLogger)
```

## Routes 
```js

a- wir erstellen ein haupt Ordner routes dann 
ein datei project.js
in diese datei schreiben wir 

(const express = require("express");

const router = express.Router();

// für projectliste.ejs
router.get("/", (req, res) => {
    res.render("projectliste", { layout: "./layouts/special.ejs" });
});

router.get("/neu", (req, res) => {
    res.render("projectNeu", { layout: "./layouts/special.ejs" });
});

//post
router.post("/", (req, res) => {
    console.log(req.body.projectName); // zeigt uns was wir in input schreiben in console
    // res.send("Project angelegt!"); // zeigt uns in browser  Project angelegt!
     res.redirect("/project")  // umleitet uns zu projectliste
});

// dynamisch wert immer am ende
router.get("/:id", (req, res) => {
    let ID = req.params.id;
    console.log(ID);
    res.render("project", { layout: "./layouts/special.ejs", projectID: ID });
});

router.put("/:id", (req, res) => {
    // aktualisieren
    res.send("Project aktualisiert");
});

router.delete("/:id", (req, res) => {
    // löchen
    res.send("Project gelöcht");
});
module.exports = router;)

b- für jeder routes wir erstellen ein ejs 
zumbeispiel :
project.ejs
projectliste.ejs
projectNeu.ejs

c- in server.js schreiben wir :

const projectRouter = require("./routes/projects");
server.use("/project", projectRouter);


```