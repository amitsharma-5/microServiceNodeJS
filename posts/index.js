const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const PORT = 4000;


const posts = [];

app.get('/posts', (req, res) => {
    res.json({ posts: posts });
});

app.delete("/posts/:id", (req, res) => {

});

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const title = req.body.title;
    posts.push({ id, title });
    // posts[id] = {
    //     id, title
    // };
    // posts[id] = { id, title };
    res.json({ posts: posts });
});

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});