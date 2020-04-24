const express = require("express");

const app = express();

app.get("/", function (res, req) {
  return req.send("Some dummy content");
});

app.listen(3000, function () {
  console.log("Your application is running on http://localhost:3000");
});
