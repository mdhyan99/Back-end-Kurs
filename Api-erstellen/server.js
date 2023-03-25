const express = require("express");
const app = express();
const db = require("./database.js");

const HTTP_PORT = 8023;

app.listen(HTTP_PORT, () => {
    console.log(`Server running ${HTTP_PORT}`);
});

app.get("/api", (req, res) => {
    res.json({ message: "ok" });
});
app.get("/api/todos", (req, res) => {
    let sql = "SELECT * FROM todo";
    let params = [];
    db.all(sql,params,(err,rows)=>{
    if(err){

        res.status(400).json({ error: err.message });
        return;
    }
    res.json({
        message:"succes",
        data:rows,
    })
    })

});
app.get("/api/todo/:id", (req, res) => {});
app.post("/api/todo", (req, res) => {});
app.patch("/api/todo/:id", (req, res) => {});
app.delete("/api/todo/:id", (req, res) => {});
app.use((req, res) => {
    res.status(404).json({
        message: "Ohhh you are lost ,read the API documentation",
    });
});
// app.get()
// app.put()
// app.post()
// app.delete()
