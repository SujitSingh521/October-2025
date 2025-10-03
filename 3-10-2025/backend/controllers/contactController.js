const Contact = require("../models/Contact");

// Get all contacts
const getContacts = async (req, res) => {
  const contacts = await Contact.find({ owner: req.user._id });
  res.json(contacts);
};

// Create contact
const createContact = async (req, res) => {
  const { name, email, phone, company } = req.body;
  const contact = await Contact.create({ name, email, phone, company, owner: req.user._id });
  res.status(201).json(contact);
};

// Update contact
const updateContact = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) return res.status(404).json({ message: "Contact not found" });
  if (contact.owner.toString() !== req.user._id.toString()) return res.status(401).json({ message: "Not authorized" });

  Object.assign(contact, req.body);
  await contact.save();
  res.json(contact);
};

// Delete contact
const deleteContact = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) return res.status(404).json({ message: "Contact not found" });
  if (contact.owner.toString() !== req.user._id.toString()) return res.status(401).json({ message: "Not authorized" });

  await contact.remove();
  res.json({ message: "Contact removed" });
};

module.exports = { getContacts, createContact, updateContact, deleteContact };
