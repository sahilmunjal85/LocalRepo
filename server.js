const express = require("express");
const app = express();

app.use(express.static("static"));

app.listen(8080, () => {
  console.log("Everthing executed fine.. Open http://localhost:8080/");
});
