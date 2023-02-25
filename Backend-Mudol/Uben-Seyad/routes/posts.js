const express = require("express");
const router = express.Router();

let posts = [
    { id: 1, title: "post 1" },
    { id: 2, title: "post 2" },
    { id: 3, title: "post 3" },
    { id: 4, title: "post 4" },
    { id: 5, title: "post 5" },
];

// req ist object anfrage von Api (Daten)
// res für  antwort 
router.get("/", (req, res) => {
    res.send(posts);
});

router.get("/:id", (req, res) => {
    const id = +req.params.id;
    const post = posts.filter((p) => p.id === id);
    res.send(post);
});

router.post("/", (req, res) => {
    const { title } = req.body;
    const { name } = req.body;
    const post = {
        title,
        name,
        id: posts.length + 1,
    };
    posts.push(post);
    res.send(post);
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const post = posts.filter((p) => p.id === parseInt(id))[0];
    const postIndex = posts.indexOf(post);
    post.title = title;
    posts[postIndex] = post;
    res.send(post);
});

// const { id } = req.params;
// const { title } = req.body;
// const post = db.data.album.filter((p) => p.id === parseInt(id))[0];
// const postIndex = db.data.album.indexOf(post);
// post.title = title;
// posts[postIndex] = post;
// res.send(post);

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const post = posts.filter((p) => p.id === parseInt(id))[0];
    const postIndex = posts.indexOf(post);
    posts.splice(postIndex, 2);
    res.send(post);
});

module.exports = router;
