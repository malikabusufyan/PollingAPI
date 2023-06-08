const express = require("express");
const router = express.Router();

const questionController = require("../controller/questions");
console.log("Index Routing properly");
router.post("/questions/create", questionController.createQuestions);

module.exports = router;
