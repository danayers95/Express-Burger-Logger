const express = require('express');
const bodyParser = require('body-parser');

// opens the server that the application will be working on the local host
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');