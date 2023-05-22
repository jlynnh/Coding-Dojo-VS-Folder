const express = require('express');
const app = express();
const port = 8000;

require("./config/mongoose.config");

app.use(cors({origin: "http://localhost:3000"}));
app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyAuthorsRoutes = require("./routes/authors.routes");
AllMyAuthorsRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );