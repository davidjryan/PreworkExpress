const express = require("express");
const app = express();

const timeLogger = (request, response, next) => {
  console.log("Datetime:", new Date(Date.now()).toString());
  next();
};

const urlLogger = (request, response, next) => {
  console.log("Request URL:", request.url);
  next();
};

app.use(express.static("public"));
app.use(urlLogger, timeLogger);

app.get("/", (request, response) => {
  response.send("hello world");
});


app.get("/sunsets", (request, response) => {
  response.status(200).sendFile(path.join(__dirname, "public", "sunsets.html"));
});

app.get("/json", (request, response) => {
  response.status(200).sendFile(path.join(__dirname, "public", "adsr.json"));
});

app.use(function(req, res, next) {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

app.listen(3000, () => {
  console.log("Express intro running on localhost:3000");
});
