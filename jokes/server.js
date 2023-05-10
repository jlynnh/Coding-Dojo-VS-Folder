const express = require('express');
const app = express();
const port = 8000;

app.use(express.urlencoded({extended:true}))
app.use(express.json())

require('./config/mongoose.config');

const AllMyJokeRoutes = require("./routes/jokes.routes");

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
});
