const express = require("express");
const router = express.Router();
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const protect = require("../middleware/authMiddleware");

// Get all tasks or create a new task
router.route("/")
  .get(protect, getTasks)     // GET /api/tasks -> Get all tasks for logged-in user
  .post(protect, createTask); // POST /api/tasks -> Create a new task

// Update or delete a specific task by ID
router.route("/:id")
  .put(protect, updateTask)    // PUT /api/tasks/:id -> Update task
  .delete(protect, deleteTask); // DELETE /api/tasks/:id -> Delete task

module.exports = router;
