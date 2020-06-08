const db = require("../models");
const File = db.file;

// Create and Save a new File
exports.create = (req, res) => {};

// Retrieve all Files from the database.
exports.findAll = (req, res) => {
  res.json("Get files");
};

// Find a single File with an id
exports.findOne = (req, res) => {};

// Update a File by the id in the request
exports.update = (req, res) => {};

// Delete a File with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Files from the database.
exports.deleteAll = (req, res) => {};
