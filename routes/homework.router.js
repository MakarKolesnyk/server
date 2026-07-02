const express = require("express");
const {
  createHomework,
  FindAllHomework,
  findHomeworkById,
  updateHomeworkById,
  deleteHomeworkById,
} = require("../controllers/homework.controller");

const homeworkRouter = express.Router();

homeworkRouter.post("/", createHomework);
homeworkRouter.get("/", FindAllHomework);
homeworkRouter.get("/:idHomework", findHomeworkById);
homeworkRouter.patch("/:idHomework", updateHomeworkById);
homeworkRouter.delete("/:idHomework", deleteHomeworkById);

module.exports = homeworkRouter;
