const Homework = require("../models/Homework");
const homeworkRouter = require("../routes/homework.router");

module.exports.createHomework = async (req, res, next) => {
  try {
    const newHomework = await Homework.create(req.body);
    res.status(201).send({ data: newHomework });
  } catch (error) {
    next(error);
  }
};

module.exports.FindAllHomework = async (req, res, next) => {
  try {
    const { subject, task, deadline } = req.query;
    const filter = {};
    if (subject) {
      filter.subject = new RegExp(subject, "i");
    }
    if (task) {
      filter.task = new RegExp(task, "i");
    }
    if (deadline) {
      filter.deadline = { $gte: new Date(deadline) };
    }
    const homeworks = await Homework.find(filter);
    res.status(200).send({ data: homeworks });
  } catch (error) {
    next(error);
  }
};
module.exports.findHomeworkById = async (req, res, next) => {
  try {
    const homework = await Homework.findById(req.params.idHomework);
    if (!homework) {
      return res.status(404).send({ error: "Homework not found" });
    }
    res.status(200).send({ data: homework });
  } catch (error) {
    next(error);
  }
};
module.exports.updateHomeworkById = async (req, res, next) => {
  try {
    const updatedHomework = await Homework.findByIdAndUpdate(
      req.params.idHomework,
      req.body,
      { new: true, runValidators: true },
    );
    res.status(200).send({ data: updatedHomework });
  } catch (error) {
    next(error);
  }
};
module.exports.deleteHomeworkById = async (req, res, next) => {
  try {
    const deletedHomework = await Homework.findByIdAndDelete(
      req.params.idHomework,
    );
    res.status(200).send({ data: deletedHomework });
  } catch (error) {
    next(error);
  }
};
