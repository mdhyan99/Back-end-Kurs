## Router mit Controller methode
- 1- wir speichern daten in Ordner data in datei db.json
- 2- ein ordner Router erstellen
- 3- in diese Ordner  erstellen wir ein datei(photoRouter.js) wir schreiben in diesen Datei:
```js
import express from "express"
import * as controller from "../controller/photoController.js"

const router = express.Router()

router
    .get("/", controller.getAllPhotos)
    .get("/:id", controller.getPhoto)
    .put("/:id", controller.editPhoto)
    .delete("/:id", controller.deletePhoto)
    .post("/", controller.savePhoto)

export default router

```
- 4- wir erstellen ein Ordner controller
- 5- in diesen Ordner erstellen wir Datei(photoController.js) und schreiben wir in :
  
```js
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'


const db = new Low(new JSONFile("data/db.json"))

export const getAllPhotos = async (req, res) => {
    await db.read()

    res.json(db.data.photos)
}

export const getPhoto = async (req, res) => {
    await db.read()
    const value = db.data.photos.find(a => a.id === +req.params.id)
    
    if(!value) {
        res.status(404).send("Not found")
        return
    }
    res.json(value)
}

export const editPhoto = async (req, res) => {
    await db.read()

    const index = db.data.photos.findIndex(a => a.id === +req.params.id)

    if(index < 0) {
        res.status(404).send("Not found")
        return
    }

    db.data.photos[index] = { ...db.data.photos[index], ...req.body }

    await db.write()

    res.send(`${req.params.id} updated`);
}

export const deletePhoto = async (req, res) => {
    await db.read()
    const index = db.data.photos.findIndex(a => a.id === +req.params.id)

    if(index < 0) {
        res.status(404).send("Not found")
        return
    }

    db.data.photos.splice(index, 1)

    db.write()

    res.send(`${req.params.id} deleted`)
}

export const savePhoto = async (req, res) => {
    await db.read()

    const nextId = Math.max(...db.data.photos.map(a => a.id)) + 1
    
    db.data.photos.push({id: nextId, ...req.body})

    db.write()

    res.send(`${nextId}`)
}
```
- 6- in main.js schreiben wir:
```js
import express from "express"
import cors from "cors"

import photoRouter from "./routes/photoRouter.js"


const server = express()
const port = 4000

server.use(express.json()) //JSON parser

server.use(cors({origin: "*"}))

server.use("/photos", photoRouter)

server.use((req,res)=>{
    res.status(404).send("Diese Seite gibt es nicht :(")
})

server.use((err, req, res, next) => {
    console.log("Ein Fehler ist aufgetreten", err)
    res.status(500).send("Es liegt nicht an dir sondern an mir...")
})

server.listen(port, ()=> {
    console.log("Server is running on " + port)
})

```