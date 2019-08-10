const express = require("express");
const router = express.Router();

router.post("/", function(req, res, next) {
  const callSug = require("../public/callSuggestion.js");
  console.log(req.baseUrl);
  let sugData = req.baseUrl.slice(1, req.baseUrl.length);
  console.log(sugData);
  res.send(callSug(sugData));
});

module.exports = router;
