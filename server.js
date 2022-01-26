

const express = require('express');
const path = require('path')
const util = require ('util')
const fs= require ('fs')
const app = express();
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


app.post('api/notes', (req, res) => {
    //Access the note data

    const newNote = req.body;





    //create persistent data
    res.json('a message')

});

app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);
