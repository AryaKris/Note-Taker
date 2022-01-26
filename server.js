

const express = require('express');
const path = require('path')
const util = require ('util')
const fs= require ('fs')
const app = express();
//breaking apart the object - destructuring
//:uuid4 renames v4 to uuid4
const { v4: uuidv4 } = require('uuid');
// const uuid = require ('uuid')
// const uuidv4 = uuid.v4

//set port
const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//linking to the assets folder
app.use(express.static('public'));
// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);

/**
 *  Function to write data to the JSON file given a destination and some content
 *  @param {string} destination The file you want to write to.
 *  @param {object} content The content you want to write to the file.
 *  @returns {void} Nothing
 */
const writeToFile = (destination, content) =>
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
        err ? console.error(err) : console.info(`\nData written to ${destination}`)
    );

/**
 *  Function to read data from a given a file and append some content
 *  @param {object} content The content you want to append to the file.
 *  @param {string} file The path to the file you want to save to.
 *  @returns {void} Nothing
 */
const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData);
        }
    });
};
//send the file index.html
app.get("/", function (req, res) {

    res.sendFile(path.join(__dirname, "/public/index.html"));
});

//send the file notes.html

app.get('/notes', (req, res) => {

    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

//API Routes

app.get ('/api/notes', (req,res)=>{
    //get infor from the database 
    readFromFile('./db/db.json')
    .then(function(data){
        const parsedData = JSON.parse(data);
        res.json(parsedData);
        
    })
    .catch(function(err){
        res.json(err);
    })
    
})


app.post('/api/notes', (req, res) => {
    //Access the note data

    const newNote = req.body;
    newNote.id = uuidv4(); //function returns a truly unique id
    readAndAppend(newNote,'./db/db.json')





 //create persistent data
    res.json('a message')

});
app.delete('/api/notes/:id', (req,res)=>{
    readFromFile('./db/db.json')
        .then(function (data) {
            const parsedData = JSON.parse(data);
        const noteId = req.params.id
        const newNotesArray = parsedData.filter(note=>note.id!==noteId)
         writeToFile('./db/db.json', newNotesArray)  
         res.json ('a message')

        })
        .catch(function (err) {
            res.json(err);
        })

})//anything after / will be saved as id



app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);
