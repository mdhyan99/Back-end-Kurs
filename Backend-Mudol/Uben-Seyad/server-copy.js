const express = require("express");
const app = express();

app.use(express.json()) // hier kann json lesen
let posts = [
    { id: 1, title: "post 1" },
    { id: 2, title: "post 2" },
    { id: 3, title: "post 3" },
    { id: 4, title: "post 4" },
    { id: 5, title: "post 5" },
];

// GET      --->    get data
app.get("/", (req, res) => {
    res.send(posts);
});
// gibt uns zurück
// [ {"id": 1,"title": "post 1"},
// [ {"id": 2,"title": "post 2"},
// [ {"id": 3,"title": "post 3"},
// [ {"id": 4,"title": "post 4"},
// [ {"id": 5,"title": "post 5"},]  // json

app.get("/:id", (req, res) => {
    const id = +req.params.id;
    const post = posts.filter((p) => p.id === id);
    res.send(post);
});
// wenn wir localhost:5000/2 in posts schreiben
// gibt uns zurück
// [{"id": 2, "title": "post 2"}]

// post     --->    create data

app.post("/", (req, res) => {
    const { title } = req.body;
    const { name } = req.body;
    const post = {
        title,
        name,
        id: posts.length + 1,
    };
    posts.push(post)
    res.send(post);
});
// hier was wir in Json  schreiben fügt zu post mit title und id 
// hier haben wir in Json {"title":"new title"} geschrieben
// dann gibt uns zurück new post 
// [ {"id": 1,"title": "post 1"},
//  {"id": 2,"title": "post 2"},
//  {"id": 3,"title": "post 3"},
//  {"id": 4,"title": "post 4"},
//  {"id": 5,"title": "post 5"}, 
//  {"title": "new title","name":"mohammad" ,"id": 6}] 


// Put      --->    update data

app.put("/:id", (req, res) => {
    const {id} = req.params;
    const {title} = req.body;
    const post = posts.filter((p) => p.id === parseInt(id))[0];
    const postIndex = posts.indexOf(post)
    post.title=title
    posts[postIndex]= post
    res.send(post);
});

// hier was wir in Json schreiben und put senden und localhost:5000/2
// hier haben wir in Json {"title":"Ubdated post"} geschrieben
// dann gibt uns zurück new post 
// [ {"id": 1,"title": "post 1"},
//  {"id": 2,"title": "Ubdated post"},
//  {"id": 3,"title": "post 3"},
//  {"id": 4,"title": "post 4"},
//  {"id": 5,"title": "post 5"}, ] 

// Delete   --->    delete  data
app.delete("/:id", (req, res) => {
    const {id} = req.params;
    const post = posts.filter((p) => p.id === parseInt(id))[0];
    const postIndex = posts.indexOf(post)
    posts.splice(postIndex,2)
    res.send(post);
});
// hier bei  localhost:5000/1
// wir wälen delete dann senden 
// dann gibt uns zurück new post 
// {"id": 1,"title": "post 1"}
// wenn wir wälen GET dann senden  aber wir sollen zu localhost:5000/ änderen 
// dann gibt uns zurück new post 
//  [ {"id": 3,"title": "post 3"},
//  {"id": 4,"title": "post 4"},
//  {"id": 5,"title": "post 5"}, ] 
// das bedeutet hat 2 post delete 





// GET      --->    get data
// post     --->    create data
// Delete   --->    delete  data
// Put      --->    update data

app.listen(5000);
