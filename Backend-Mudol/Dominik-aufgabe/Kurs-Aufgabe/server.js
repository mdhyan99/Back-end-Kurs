import express from "express";
const app = express();
app.listen(3007);

let kurs = ["web", "javascript", "amazon"];
let inhalte = ["html", "css"];
let teilnehmer = ["muhannad", "yaaroub", "zaid", "mohammad"];

app.get("/kurse", (reg, res) => {
    res.json(kurs);
});
app.get("/inhalte", (reg, res) => {
    res.json(inhalte);
});
app.get("/teilnehmer", (reg, res) => {
    res.json(teilnehmer);
});


// von Dominik 

// ## Kurse

// GET          /kurse                    200
// GET          /kurse /:id               200
// POST         /kurse /                  201
// PUT          /kurse /:id               204
// DELETE       /kurse /:id               204

app.get("/kurse", (reg, res) => {
    res.status(200).json();
});

app.get("/kurse/:id", (reg, res) => {
    res.status(200).json();
});

app.post("/kurse", (reg, res) => {
    res.status(201).json();
});

app.put("/kurse/:id", (reg, res) => {
    res.status(204).json();
});
app.delete("/kurse/:id", (reg, res) => {
    res.status(204).json();
});

// ## teilnehmer
// GET          /teilnehmer               200
// GET          /teilnehmer/:id           200  
// POST         /teilnehmer/              201
// PUT          /teilnehmer/:id           204
// DELETE       /teilnehmer/:id           204

app.get("/teilnehmer", (reg, res) => {
    res.status(200).json();
});

app.get("/teilnehmer/:id", (reg, res) => {
    res.status(200).json();
});

app.post("/teilnehmer", (reg, res) => {
    res.status(201).json();
});

app.put("/teilnehmer/:id", (reg, res) => {
    res.status(204).json();
});
app.delete("/teilnehmer/:id", (reg, res) => {
    res.status(204).json();
});


// ## modules
// GET          /modules            200
// GET          /modules/:id        200  
// POST         /modules            201
// PUT          /modules/:id        204
// DELETE       /modules/:id        204

app.get("/modules", (reg, res) => {
    res.status(200).json();
});

app.get("/modules/:id", (reg, res) => {
    res.status(200).json();
});

app.post("/modules", (reg, res) => {
    res.status(201).json();
});

app.put("/modules/:id", (reg, res) => {
    res.status(204).json();
});
app.delete("/modules/:id", (reg, res) => {
    res.status(204).json();
});