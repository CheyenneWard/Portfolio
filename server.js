let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

require('./app/routes.js')(app);

app.listen(port);
console.log(`Server Started On Port: ${port}`);