const express = require('express');
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.static('public'));
const notes =


    app.get('/notes', (req, res) => {
        //send the file notes.html
        res.sendFile(path.join(__dirname, '/public/notes.html'));
    });


app.get('/notes', (req, res) => {
    //send the file notes.html
    res.json()
});
app.post('api/notes', (req, res) => {
    //Access the note data

    const newNote = req.body;





    //create persistent data
    res.json('a message')

});

app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);
