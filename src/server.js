const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

// Settings
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Middleware
app.use(express.urlencoded({extended: false}));

// Routes
app.get('/', (req, res) => {
    res.render('index')
});

// Static Files


module.exports = app;

