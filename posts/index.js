const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');
const app = express();
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const PORT = 4000;


const posts = [];

app.get('/posts', (req, res) => {
    res.json({ posts: posts });
});

app.delete("/posts/:id", (req, res) => {

});

app.post('/posts', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const title = req.body.title;
    posts.push({ id: id, title: title });
    // posts[id] = {
    //     id, title
    // };
    // posts[id] = { id, title };
    await axios.post('http://localhost:4005/events', {
        type: 'PostCreated',
        data: {
            id, title
        }
    });
    // res.status(201).send(posts[id]);
    res.status(201).json({ posts: posts });
});

app.post('/events', (req, res) => {
    console.log("Received Event in Post Service: ", req.body.type);

    res.send({});
});


app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});