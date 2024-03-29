const express = require("express");
const app = express();
// const port = 3000;
const port = process.env.PORT || 3000;
const path = require("path");

const { v4: uuidv4 } = require("uuid");

const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

let posts = [
  {
    id: uuidv4(),
    username: "Parth",
    content: "I love Coding",
  },

  {
    id: uuidv4(),
    username: "Sharman",
    content: "I like to travel",
  },
  {
    id: uuidv4(),
    username: "Vidyut",
    content: "There is lot of pollution",
  },
];

app.get("/", (req, res) => {
  res.send("Your project is live!!");
});

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts: posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  //   res.send("Post request working");
  res.redirect("/posts"); // By default works as GET request and it will now directyle show the posts
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);
  let post = posts.find((p) => id === p.id);
  res.render("show.ejs", { post: post });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => id === p.id);
  post.content = newContent;
  console.log(post);
  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post: post });
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id); //deleted from array
  res.redirect("/posts");
});
app.listen(port, () => {
  console.log(`Listening to Port ${port}`);
});
