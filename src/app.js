const cors = require('cors');
const express = require('express');
const app = express();

const config = require('./config/config');


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors(config.application.cors.server));


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/api', require('./routes/downloads'));

//SETTINGS
app.set('port', config.API_PORT || 4000);

module.exports = app;