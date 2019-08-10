const express = require("express");
const router = express.Router();

router.post("/", function(req, res, next) {
  const callSug = require("../public/callSuggestion.js");
  let sugData = req.baseUrl.slice(1, req.baseUrl.length);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  console.log(callSug);
  res.send(callSug(sugData));
});

module.exports = router;
