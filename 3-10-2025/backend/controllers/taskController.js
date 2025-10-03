const Task = require("../models/Task");

// Get all tasks
const getTasks = async (req, res) => {
  const tasks = await Task.find({ owner: req.user._id });
  res.json(tasks);
};

// Create task
const createTask = async (req, res) => {
  const { title, description, status, dueDate } = req.body;
  const task = await Task.create({ title, description, status, dueDate, owner: req.user._id });
  res.status(201).json(task);
};

// Update task
const updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  if (task.owner.toString() !== req.user._id.toString()) return res.status(401).json({ message: "Not authorized" });

  Object.assign(task, req.body);
  await task.save();
  res.json(task);
};

// Delete task
const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  if (task.owner.toString() !== req.user._id.toString()) return res.status(401).json({ message: "Not authorized" });

  await task.remove();
  res.json({ message: "Task removed" });
};

module.exports = { getTasks, createTask, updateTask, deleteTask };
