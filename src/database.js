const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:mongo@Mongo:27017', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('Database is Connected'))
    .catch(err => console.log(err));