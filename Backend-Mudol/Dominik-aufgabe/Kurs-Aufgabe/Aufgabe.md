Aufgabe 1
=================
Wir wollen eine neue API erstellen, mit der unsere Kursinformationen abgerufen und verwaltet werden können. Zuerst müssen wir aber ein wenig planen.
Folgende Ressourcen-Typen benötigen wir:
- Kurse
- Teilnehmer
- Module/Inhalte
Für alle drei Ressourcen-Typen sollen CRUD-Operationen über die API verfügbar sein. Außerdem soll jede einzelne Ressource erreichbar sein. Plane die entsprechenden Endpoints und überlege dir auch, welche Statuscodes in welchen Situationen zurückgesendet werden können.

## Kurse

GET          /kurse                    200
GET          /kurse /:id               200  
POST         /kurse /                  201
PUT          /kurse /:id               204
DELETE       /kurse /:id               204



## teilnehmer
GET          /teilnehmer               200
GET          /teilnehmer/:id           200  
POST         /teilnehmer/              201
PUT          /teilnehmer/:id           204
DELETE       /teilnehmer/:id           204


## Kurse/modules
GET          /kurse/modules            200
GET          /kurse/modules/:id        200  
POST         /kurse/modules            201
PUT          /kurse/modules/:id        204
DELETE       /kurse/modules/:id        204




## Kursverwaltung
Unsere Kursverwaltung wird erweitert! Wir wollen einige Änderungen vornehmen, die mit Middlewares gut umzusetzen sind.
1. Richte eine Middleware ein, die sämtliche Anfragen im Terminal loggt.
2. Fange "Not Found"-Fehler ab und beantworte die Fehler selbst mit dem Statuscode 404.
Bei POST, PUT und PATCH können wir einen Body in der Anfrage verwenden. Damit wir die Daten im Backend verarbeiten können, müssen wir sie aber zuerst umwandeln(ähnlich dem response.json() bei fetch()).
Hierzu verwenden wir die Middleware express.json(), die wir folgendermaßen einbinden: app.use(express.json()).
Anschließend sind die übermittelten Daten in req.body enthalten.
1. Richte diese "Body Parser" Middleware in deinem Server ein.
2. Teste sie, indem du an POST /participants ein paar Informationen übermittelst und in der Antwort oder im Terminal ausgibst.
3. Lege dir ein leeres Array "participants" an in server.js und speichere die übermittelten Daten darin. Überlege dir, wie du eine passende ID erzeugen kannst.
Hier ist ein Beispiel-Array mit Teilnehmerdaten:
[
    {
      id: 1,
      firstName: "Shannah",
      lastName: "Curton",
      email: "scurton0@weather.com",
      age: 46,
    }, {
      id: 2,
      firstName: "Arvie",
      lastName: "Stading",
      email: "astading1@drupal.org",
      age: 39,
    }, {
      id: 3,
      firstName: "Cassandry",
      lastName: "Parcells",
      email: "cparcells2@foxnews.com",
      age: 23,
    }
]
1. Überprüfe beim POST /participants, ob das Alter "age" größer oder gleich 18 ist. Falls nicht, gib einen Fehler zurück und speichere den Datensatz nicht.
2. Überprüfe außerdem, ob Vor- und Nachname und die E-Mail-Adresse übermittelt wurden. Falls nicht, gib einen Fehler zurück und speichere den Datensatz nicht.
// Task 1
// =================
// ## Courses
// GET         /courses            200
// GET         /courses/:id        200
// POST        /courses            201
// PUT         /courses/:id        204
// DELETE      /courses/:id        204
app.get("/courses", (req, res) => {
    res.status(200).json();
});
app.get("/courses/:id", (req, res) => {
    res.status(200).json();
});
app.post("/courses", (req, res) => {
    res.status(201).json();
});
app.put("/courses/:id", (req, res) => {
    res.status(204).end();
});
app.delete("/courses/:id", (req, res) => {
    res.status(204).end();
});

// ## Participants
// GET         /participants       200
// GET         /participants/:id   200
// POST        /participants       201
// PUT         /participants/:id   204
// DELETE      /participants/:id   204
app.get("/participants", (req, res) => {
    res.status(200).json();
});
app.get("/participants/:id", (req, res) => {
    res.status(200).json();
});
app.post("/participants", (req, res) => {
    res.status(201).json();
});
app.put("/participants/:id", (req, res) => {
    res.status(204).end();
});
app.delete("/participants/:id", (req, res) => {
    res.status(204).end();
});

// ## Modules
// GET         /modules            200
// GET         /modules/:id        200
// POST        /modules            201
// PUT         /modules/:id        204
// DELETE      /modules/:id        204
app.get("/modules", (req, res) => {
    res.status(200).json();
});
app.get("/modules/:id", (req, res) => {
    res.status(200).json();
});
app.post("/modules", (req, res) => {
    res.status(201).json();
});
app.put("/modules/:id", (req, res) => {
    res.status(204).end();
});
app.delete("/modules/:id", (req, res) => {
    res.status(204).end();
});