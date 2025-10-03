const Lead = require("../models/Lead");
const Contact = require("../models/Contact");
const Task = require("../models/Task");

// Get dashboard stats (contacts, leads, tasks)
const getStats = async (req, res) => {
  try {
    const contacts = await Contact.countDocuments({ owner: req.user._id });
    const leads = await Lead.countDocuments({ owner: req.user._id });
    const tasks = await Task.countDocuments({ owner: req.user._id });

    res.json({ contacts, leads, tasks });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Analytics: Leads per month chart
const getLeadAnalytics = async (req, res) => {
  try {
    const leads = await Lead.find({ owner: req.user._id });
    const labels = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const values = Array(12).fill(0);

    leads.forEach((lead) => {
      const month = new Date(lead.createdAt).getMonth();
      values[month]++;
    });

    res.json({ labels, values });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { getStats, getLeadAnalytics };
