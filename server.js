const express = require("express")
const path = require("path");

let app = express()

app.get('/', (req, res) => {
    return (res.sendFile(path.join(__dirname, 'public', 'index.html')))
});

app.use(express.static('public'))

app.listen(3000, () => console.log("Listening on http://localhost:3000"));