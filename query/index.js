const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const PORT = 4002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


const posts = [];

app.get('/posts', (req, res) => {

});

app.post('/events', (req, res) => {
    const { type, data } = req.body;

    if (type === 'PostCreated') {
        const { id, title } = data;
        posts.push({ id, title, comment: [] });
    }

    if (type === 'CommentCreated') {
        const { id, content, postId } = data;

        const post = posts[postId];
        post?.comments?.push({ id, content });
    }

    console.log(posts);

    res.send({});
});



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})