const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const reg =  require('./models/reg.js');
const methodOverride = require('method-override');

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
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// Routes
app.get('/', (req, res) => {
    res.render('index')
});

/* nuevo registro */
app.get('/reg/add', (req, res) => {
    res.render('registros/new-reg')
});
app.post('/reg/add', async (req, res) => {
    console.log(req.body);
    const {ced, name, tel} =  req.body;
    const newReg = new reg({ced , name , tel});
    await newReg.save();
    res.redirect('/reg')
});

/* obtener todos los registros */
app.get('/reg', async (req, res) => {
    const regs = await reg.find().lean();
    res.render('registros/all-reg', {regs});
});

/* editar registros */
app.get('/edit/:id', (req, res) => {
    res.send('form editar')
});
app.put('/edit/:id', (req, res) => {
    res.send('actualizar')
});
/* borrar */
app.delete('/reg/delete/:id', async (req, res) => {
    await reg.findByIdAndDelete(req.params.id);
    res.redirect('/reg')
});

// Static Files


module.exports = app;

