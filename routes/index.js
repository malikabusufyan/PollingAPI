const express = require("express");
const router = express.Router();

const questionController = require("../controller/questions");
const optionController = require("../controller/options");
console.log("Index Routing properly");

//To create a new question
router.post("/questions/create", questionController.createQuestions);

//To view a question
router.get("/questions/:id", questionController.viewQuestions);

//To create option inside the question
router.post("/questions/:id/options/create", optionController.createOptions);

//To add vote
router.get("/options/:id/add_vote", optionController.addVote);

//To delete an Option
router.delete("/options/:id/delete", optionController.deleteOption);

//To delete a question
router.delete("/questions/:id/delete", questionController.deleteQuestion);

module.exports = router;
