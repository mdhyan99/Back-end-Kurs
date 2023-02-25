const express = require("express");

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
    // res.json({id:ID})
});

router.put("/:id", (req, res) => {
    // aktualisieren
    res.send("Project aktualisiert");
});

router.delete("/:id", (req, res) => {
    // löchen
    res.send("Project gelöcht");
});


//   oder  für get  put  delete  zusammen
/* 
router.route("/:id")
.get((req, res) => {
    let ID = req.params.id;
    console.log(ID);
    res.render("project", { layout: "./layouts/special.ejs", projectID: ID });
})
.put((req, res) => {
    res.send("Project aktualisiert");
})
.delete((req, res) => {
    res.send("Project gelöcht");
});

*/

module.exports = router;
