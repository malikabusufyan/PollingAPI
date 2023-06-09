const Question = require("../model/Question");

//To create a new question
module.exports.createQuestions = async (req, res) => {
  try {
    const { title } = req.body;
    const question = await Question.create({
      title,
    });
    return res.status(200).json({
      message: "Successfully Created the Question",
      data: {
        question,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something Went Wrong",
      data: {
        error,
      },
    });
  }
};

//To view question and its options using ID
module.exports.viewQuestions = async (req, res) => {
  try {
    const { id } = req.params;
    const question = await Question.findById(id).populate({
      path: "options",
    });
    return res.status(200).json({
      message: "See the Question and Options",
      data: {
        question,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something Went Wrong",
      data: {
        error,
      },
    });
  }
};
