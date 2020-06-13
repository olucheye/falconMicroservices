const mongoose = require('mongoose');
const shortid = require('shortid');

//define database schema & model for posts
const fileSchema = new mongoose.Schema({
  title: { 
    type: String,
    required: true,
    unique: true
  },
  fileURL: { 
    type: String,
    required: true,
    unique: true
  },
}, { timestamps: true });

const File = mongoose.model("Upload", fileSchema);

module.exports = File;