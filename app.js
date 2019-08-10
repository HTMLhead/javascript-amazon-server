const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./route/dataRoute");
app.set("port", 8000);
app.use(cors());
app.use(express.static("public"));
app.use(router);

const dataRouter = require("./route/dataRoute");

app.use("/*******", dataRouter);

var port = process.env.PORT || 8000; //*
app.listen(port, () => {
  console.log("Server On!");
});
