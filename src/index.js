const express = require('express');
const app = require('./server');
require('./database');
require('./config.js')

app.listen(8081, () => {
    console.log("Server on port 8081")
});

