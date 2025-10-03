const Lead = require("../models/Lead");

// Get all leads
const getLeads = async (req, res) => {
  const leads = await Lead.find({ owner: req.user._id });
  res.json(leads);
};

// Create lead
const createLead = async (req, res) => {
  const { name, email, status, source } = req.body;
  const lead = await Lead.create({ name, email, status, source, owner: req.user._id });
  res.status(201).json(lead);
};

// Update lead
const updateLead = async (req, res) => {
  const lead = await Lead.findById(req.params.id);
  if (!lead) return res.status(404).json({ message: "Lead not found" });
  if (lead.owner.toString() !== req.user._id.toString()) return res.status(401).json({ message: "Not authorized" });

  Object.assign(lead, req.body);
  await lead.save();
  res.json(lead);
};

// Delete lead
const deleteLead = async (req, res) => {
  const lead = await Lead.findById(req.params.id);
  if (!lead) return res.status(404).json({ message: "Lead not found" });
  if (lead.owner.toString() !== req.user._id.toString()) return res.status(401).json({ message: "Not authorized" });

  await lead.remove();
  res.json({ message: "Lead removed" });
};

module.exports = { getLeads, createLead, updateLead, deleteLead };
