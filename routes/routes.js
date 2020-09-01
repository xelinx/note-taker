const path = require("path");
const fs = require ("fs");

//Routing
module.exports = function (app) {

    //API Get
    app.get("/api/notes", function (req, res) {
        var notesData = JSON.parse(fs.readFile("/db/db.json", "utf8"));

        // reads from json file
        res.json(notesData);
    });
    
    //API Post
    app.post("/api/notes", function (req, res) {
        var notesData = JSON.parse(fs.readFile("/db/db.json", "utf8"));

        // Receives a new note, adds it to db.json, then returns the new note
        notesData.push(req.body);
        fs.writeFileSync("/db/db.json", JSON.stringify(notesData));
        
        return console.log("Added: "+req.body.title);   
 //       res.json(notesData);     
    });
    
    //API ID
    app.get("/api/notes/:id", function (req, res) {
        res.json(notesData[req.params.id]);
    });

    //API Delete
    app.delete("/api/notes:id", function (req, res) {
        var notesData = JSON.parse(fs.readFile("/db/db.json", "utf8"));

        notesData.splice(req.params.id, 1);

        fs.writeFileSync("/db/db.json", JSON.stringify(notesData));

    });
    

    //HTML Route
    app.get ("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))    
    });
    app.get ("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"))    
    });
    
};