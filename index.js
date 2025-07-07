require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const githubData = {
  login: "sparrow7559",
  id: 143615159,
  node_id: "U_kgDOCI9ktw",
  avatar_url: "https://avatars.githubusercontent.com/u/143615159?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/sparrow7559",
  html_url: "https://github.com/sparrow7559",
  followers_url: "https://api.github.com/users/sparrow7559/followers",
  following_url:
    "https://api.github.com/users/sparrow7559/following{/other_user}",
  gists_url: "https://api.github.com/users/sparrow7559/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/sparrow7559/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/sparrow7559/subscriptions",
  organizations_url: "https://api.github.com/users/sparrow7559/orgs",
  repos_url: "https://api.github.com/users/sparrow7559/repos",
  events_url: "https://api.github.com/users/sparrow7559/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/sparrow7559/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 15,
  public_gists: 0,
  followers: 1,
  following: 1,
  created_at: "2023-08-30T12:46:12Z",
  updated_at: "2025-07-06T09:51:58Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("virajdotcom");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Viraj Youtube</h2>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
