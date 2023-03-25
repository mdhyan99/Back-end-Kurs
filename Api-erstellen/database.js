const sqlite3 = require("sqlite3");

let db = new sqlite3.Database("todo.db", (err) => {
    if (err) {
        throw err;
    }
    console.log("Connected to the SOLite database.");
    db.run(
        `CREATE TABLE todo (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT,
            created INTEGER,
            updated INTEGER
        )`,
        (err) => {
            if (err) {
                return;
            }
            var insert =
                "INSERT INTO todo (name,description,created,updated) VALUES (?,?,?,?)";

            db.run(insert, [
                "Einkaufen gehen",
                "Wir brauchen unbedingt Gurke",
                Date.now(),
                Date.now(),
            ]);
            db.run(insert, [
                "Wohnung putzen",
                "Das Klo ist zuge*** ,dringende Handlungsbedarf",
                Date.now(),
                Date.now(),
            ]);
        }
    );
});
