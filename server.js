

const express = require('express');
const path = require('path')
const app = express();
//set port
const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//linking to the assets folder
app.use(express.static('public'));

//send the file index.html
app.get("/", function (req, res) {

    res.sendFile(path.join(__dirname, "/public/index.html"));
});

//send the file notes.html

app.get('/notes', (req, res) => {

    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

//API Routes


app.post('api/notes', (req, res) => {
    //Access the note data

    const newNote = req.body;





    //create persistent data
    res.json('a message')

});

app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);
