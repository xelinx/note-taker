//Dependencies
const express = require("express");


//Server
const app = express();

//Port
const PORT = process.env.PORT || 8080;

//Parsing
app.use(express.urlencoded({ extended: true}));
applicationCache.use(express.json());

//Routes
require ("./routes/routes")(app);


//Listener
app.listen(PORT, function () {
    console.log(`App listening on PORT:${PORT}`);
  });