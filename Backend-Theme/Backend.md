## Erste Schritt

-   wir erstellen datei.js
-   npm init -y für package.json installieren
-   npm i -D nodemon für node-modules installieren
-   dann schreiben wir in Terminal 
-   npm i express

-   

-   dann nodemon datei.js
-   dann öfnnen wir Thunder client oder posts
-   dann schreiben in datei.js
-   wir schreiben in Thunder oder postes localhost:4444/..... dann senden



- Oder
- 1- npm init -y
- 2-  npm i express
- 3- npm i -D nodemon
- dann öffnen wir posts und schreiben wir localhost:......
-   "scripts": {
    "dev": "nodemon serverApi.js",
    "start": "nodemon serverApi.js"
    }, wir äderen wenn wir npm start benuzt oder npm run dev
    -  wir äderen erste Zeile 
    "type":"module"

- 4- dann schreiben wir (npm run dev) oder  (nodemon serverApi.js) oder ( npm run start)
- 
```js
const express = require("express");
const app = express();
app.listen(4444); //localhost:4444/

// localhost:4444/is-number/34?q=javascript&oq=java&aqs=chrome.2.69i57j0i433i512l4j69i60l3.7048j0j4&sourceid=chrome&ie=UTF-8
app.get("/is-number/:number", (request, response) => {
    // const { number } = request.params;
    const number = request.params.number;
    // was wir schreiben nach localhost:4444/is-number/432
    console.log(number); // 34
    console.log(request.params); //{ number: '34' }
    console.log(request.query);
    //   {
    //   q: 'javascript',
    //   oq: 'java',
    //   aqs: 'chrome.2.69i57j0i433i512l4j69i60l3.7048j0j4',
    //   sourceid: 'chrome',
    //   ie: 'UTF-8'
    // }
    if (isNaN(number)) {
        response.json("Dies ist Kein Zahl");
    } else {
        response.json("Dies ist eine Zahl");
    }
    // if (isNaN(number)) {
    //   return  response.json("Dies ist Kein Zahl");
    // }
    //     response.json("Dies ist eine Zahl");
});
```

## Port
- 1- wir erstellen datei .env
- in .env schreiben wir :
- PORT = 4000
- 
- in main.js schreiben wir 
- import dotenv from "dotenv"
- dotenv.config()

const port = process.env.PORT
## GET POST PUT PATCH DELETE 

```js
const express = require("express");
const app = express();
server.listen(4002);

let notizen =[1,2,3]
let user =["a","b","c"]

// GET      --->    get data
// post     --->    create data
// Delete   --->    delete  data
// Put      --->    update data
// Patch    --->    bearbeiten data

// req ist object anfrage von Api (Daten)
// res für  antwort 
server.get("/users", (req,res) => {res.json(users) }); // ["a","b","c"]
//Notiz lesen

server.post("/users", (req,res) => {
   users.push(users.length + 1)
    res.json()
    // res.status(201).json()
     });
// Notiz erstellen (post)

server.put("/users", (req,res) => {
    const index =users.length-1;
    users[index]="z":
    // res.status(204).end()

    res.json() });
// Notiz akualisieren  (überschreiben des Datensatzes)  (put)

server.patch("/", (req,res) => {res.json() });
// Notiz bearbeiten des bestehenden Datensatzes  (patch)

server.delete("/users", (req,res) => {
    users.pop()
    res.json() });
// Notiz löschen (delete)




```

## delete 
```js
 // für ein element zu löschen
server.delete("/users/:index", (req,res) => {
    const index = +reg.params.index;

    // users=users.filter((user,userIndex)=>userIndex !== index); 
    // oder
    users.splice(index,1)
    res.json()  // zeigt uns was bleibt nach dem löchen 

    // const deletUser = users.splice(index,1)
    // res.json(deletUser)   // zeigt uns was wir gelöcht haben
    });
```
## status code
```js
1xx => Info
2xx => Ok
200 Ok
201 Created
204 No Contend

3xx => Redirects

4xx => Client Error
400 Client Error
401 Unauthorized
403 Forbidden
404 Not Found

5xx => Server Error
500 Server Error
```

## Use 
```js
app.use((req,res,next)=> {
    if(req.url === '/').res.end('hello from hom')
    else if(req.url === '/about').res.end('hello from about')
    else res.end('404 not found')
})
```

