const cors = require('cors');
const express = require('express');
const app = express();

const config = require('./config/config');


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors(config.application.cors.server));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Content-Disposition, Accept, Access-Control-Allow-Request-Method');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/api', require('./routes/downloads'));

//SETTINGS
app.set('port', process.env.PORT || config.SERVER_PORT);

module.exports = app;