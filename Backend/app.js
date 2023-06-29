const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());
app.options("*", cors());
app.use(
  cors({
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200,
  })
);

const router = require("./router");

app.use(router);

app.listen(5000, () => {
  console.log("le serveur Hackathon est lancé");
});

module.exports = app;
