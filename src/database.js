const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/reg-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    
})
    .then(db => console.log('Mongo Database is Connected'))
    .catch(err => console.log(err));