const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

const PORT = 4005;
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.post('/events', (req, res) => {
    const event = req.body;
    console.log("Event Obj: ", event);
    axios.post('http://localhost:4000/events', event).catch((err) => {
        console.log("Error: ", err.message)
    });
    axios.post('http://localhost:4001/events', event).catch((err) => {
        console.log("Error: ", err.message)
    });
    axios.post('http://localhost:4002/events', event).catch((err) => {
        console.log("Error: ", err.message)
    });

    res.send({ status: "OK" });
});



app.listen((PORT), () => {
    console.log(`listening on port: ${PORT}`);
});