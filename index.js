const express = require("express");
const path = require("path");
const ejs = require("ejs");
const app = express();
const port = 8080;

const articles = [
  {
    title: 'Apprendre HTML CSS et JavaScript',
    category: 'Développement Web',
  },
  {
    title: 'Apprendre Node.js',
    category: 'Développement Web',
  },
  {
    title: 'Apprendre React',
    category: 'Développement Web',
  },
  {
    title: 'Apprendre TypeScript',
    category: 'Développement Web',
  },
]


app.set("view engine", "ejs");
app.use("/static", express.static("public"));
app.get("/", (req, res) => {
  // const template = path.join(__dirname, "views", "home.ejs");
  // const data = {};
  // const options = {};
  // ejs.renderFile(template, data, options, (err, str) => {
  //   if (err) {
  //     console.log(err);
  //     res.status(500).send("Internal Server Error");
  //   } else {
  //     res.send(str);
  //   }
  // });
  res.render('home');
});
app.get('/hello/:name', (req, res) => {
  const data = {
    name: req.params.name,
  }
  res.render('hello', data);
})
app.get('/posts', (req, res) => {
  res.render('post-list', { posts: articles });
})
app.listen(port, () => {
  console.log(`Server Start to http://localhost/:${port} !`)
});
