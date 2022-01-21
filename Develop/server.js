const express = require('express');
const app = express();
const PORT = 3001;
app.use(express.static('public'));


app.get('/note', (req,res) =>{
    //send the file note.html
})

app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);
