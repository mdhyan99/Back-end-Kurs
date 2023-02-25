const user = require("./aufgabe.json");
// import user from "./aufgabe.json" assert {type:"json"}
const express = require("express");
const app = express();
app.listen(3055);

// aufgabe 1
 app.get("/user", (request, response) => {
     response.json({ user });
 });

// aufgabe 2
app.get("/user/:id", (request, response) => {
    // response.json(request.params.id)
    const result = user.find((el) => el.id === +request.params.id);

    // console.log(result);
    if (result) {
        return response.json(result);
    }
    response.json("Es gibt kein user mit diese id Danke Edwin");
});

 // aufgabe 3
 app.get("/username", (request, response) => {
    const suchen = user.find((el) => el.username === request.query.name);

    console.log(request.query);
    if (suchen) {
        return response.json(suchen);
    }
    response.json(user);

    //  response.json(request.query);
 });
