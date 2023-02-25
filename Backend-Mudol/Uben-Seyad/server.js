const express = require("express");
const app = express();

app.use(express.json()) // hier kann json lesen

require('./routes')(app)

app.listen(5000);
