## klein beispiel 
- 1- in roouter Ordner erstellen wir aboutRouter.js und schriben wir:
```js
const express = require("express");
const router = express.Router();
router.get('/',(req,res,next)=>{
    // hier '/about' aber wir haben in server.js  app.use('/about',aboutRouter) geschrieben
    res.send('hello from about')
})
router.get('/me',(req,res,next)=>{ 
    // hier '/about/me' aber wir haben in server.js  app.use('/about',aboutRouter) geschrieben
    res.send('hello from me')
})
router.get('/company',(req,res,next)=>{
    res.send('hello from company')
     // hier '/about/company' aber wir haben in server.js  app.use('/about',aboutRouter) geschrieben
})
module.exports =router
```
- 2- in server.js schreiben wir 
```js
const express = require("express");
const aboutRouter =require('./router/aboutRouter')
const app = express();
 
 app.get('/',(req,res,next)=>{
    res.send('hello from home')
   })
 app.use('/about',aboutRouter)

 app.use((req,res,next)=>{
    res.send('404 not found')
   })
   app.listen(3005,()=> console.log('server listen on port 3000'))


```

### für Router einbauen wir sollen nechste machen:
- 1- ein ordner Router erstellen
- 2- in diese Ordner wir erstellen ein datei wir schreiben in diesen Datei:
- 
```js
const express = require("express");
const router = express.Router();

let posts = [
    { id: 1, title: "post 1" },
    { id: 2, title: "post 2" },
    { id: 3, title: "post 3" },
    { id: 4, title: "post 4" },
    { id: 5, title: "post 5" },
];
 
router.get("/", (req, res) => {
    res.send(posts);
});

router.get("/:id", (req, res) => {
    const id = +req.params.id;
    const post = posts.filter((p) => p.id === id);
    res.send(post);
});

router.post("/", (req, res) => {
    const { title } = req.body;
    const { name } = req.body;
    const post = {
        title,
        name,
        id: posts.length + 1,
    };
    posts.push(post);
    res.send(post);
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const post = posts.filter((p) => p.id === parseInt(id))[0];
    const postIndex = posts.indexOf(post);
    post.title = title;
    posts[postIndex] = post;
    res.send(post);
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const post = posts.filter((p) => p.id === parseInt(id))[0];
    const postIndex = posts.indexOf(post);
    posts.splice(postIndex, 2);
    res.send(post);
});

export default router

```
- 3- wir erstellen index.js in Router und schreiben wir:
```js
export default (app) => {
    app.use('',require('./posts'))
}
```
- 4- in server.js schreiben wir:
```js
const express = require("express");
const app = express();

app.use(express.json()) // hier kann json lesen

require('./routes')(app)

app.listen(5000);

```

