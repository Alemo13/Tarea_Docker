const express = require('express');
const app = require('./server');
const database = require('./database');
const condig = require('./config.js')

app.listen(8081, () => {
    console.log("Server on port 8081")
});

