const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const connect = require('./db/config');
const movieRoutes = require('./routes/movieRoutes');


app.use(express.static(__dirname + '/../client'));

app.use(express.json());


app.use(express.urlencoded({extended : false}));
app.use(movieRoutes);




connect();
app.listen(process.env.PORT, () => {
    console.log(`server listening at ${process.env.PORT}`);
});