let bodyParser = require('body-parser');
let nodemailer = require('nodemailer');

module.exports = function(app) {
    // ROUTES
    app.get('/', function(req, res) {
       res.render('index.ejs'); 
    });
}