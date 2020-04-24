const path = require("path");
const fs = require("fs");
const express = require("express");

const app = express();

app.get("/hello-world", function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/hello-world.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");

  return res.send(contentFromHtmlFile);
});

app.get("/me", function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/me.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");

  return res.send(contentFromHtmlFile);
});

app.use("/static", express.static(path.resolve(__dirname, "../dist")));

app.listen(3000, function () {
  console.log("Your application is running on http://localhost:3000");
});
