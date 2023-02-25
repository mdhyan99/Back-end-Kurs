const express = require("express");
const dotenv = require("dotenv"); //config
const morgan = require("morgan");
const mongoose = require('mongoose') //mongoose

dotenv.config({ path: "config.env" });//config

//mongoose
mongoose.connect(process.env.DB_URI).then((conn)=>{
    console.log(`Database Connection: ${conn.connection.host}`);
}).catch((err)=>{
    console.error(`Databse Error :${err}`);
    process.exit(1)
})


// express app
const app = express();
 
// Middlewares
app.use(express.json()) // macht parsen für json

if (process.env.NODE_ENV === "development") {
}
app.use(morgan("dev"));
console.log(`mode: ${process.env.NODE_ENV}`);

//1-Create schema
const categorySchema = new mongoose.Schema({
    name: String,
})

// 2 create model
const CategoryModel = mongoose.model("Categroy",categorySchema)


// Routes

app.post("/",(req,res)=>{
    const name =req.body.name;
    console.log(req.body);
    const newCategroy = new CategoryModel({name})
    newCategroy.save().then((doc)=>{
        res.json(doc)
    })
    .catch((err)=>{
        res.json(err)
    })
})


app.get("/", (req, res) => {
    res.send("our API config");
});


// config PORT
const PORT = process.env.PORT || 8006;
app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
});
