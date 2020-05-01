// Require needed modules and initialize Express app
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const connectRoute = require('./routes/connect');

// Set cors and bodyParser middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/*set up routes*/
app.use('',connectRoute);

const PORT = 3001;

// Start server on 3000 port
app.listen(PORT, () => console.log(`Swamp Events service listening on port ${PORT}`));