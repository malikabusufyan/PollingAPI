const Option = require("../model/Option");
const Question = require("../model/Question");

module.exports.createOptions = async (req, res) => {
  try {
    const { text } = req.body;

    const option = await Option.create({
      text,
    });

    //Need to add the link will do it later

    const { id } = req.params;
    const question = await Question.findById(id);
    question.options.push(option._id);
    question.save();
    return res.status(200).json({
      message: "Options Created Successfully",
      data: {
        option,
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
