const File = require("../models/file.model");
/**
 * Controllers for :
 * 
 * getFiles
 * getFile,
 * createFile,
 * updateFile,
 * deleteFile
 */
const FileContoller = {
  getFile: (req, res) => {
    const query = {};
    if (req.query.title) {
      query.title = req.query.title;
    }
    if (req.query.fileId) {
      query._id = req.query._id;
    }
    File.find(query, (err, files) => {
      if (err) {
        console.error(err);
        return res.send(`Error finding file - ${err}`);
      }
      const returnFile = files.map((file) => {
        return file.toJSON();
      });
      return res.json(returnFile);
    })
  },

  createFile: (req, res) => {
    if (typeof(req.body) === 'object') {
      if (!req.body.title || !req.body.fileURL) {
        res.status(400);
        return res.send("Title and URL required");
      }
      new File(req.body).save((err, file) => {
        if (err) {
          console.error(err);
          return res.send(`Error adding file - ${err}`);
        }
        res.send("Successfully added lesson");
        return res.json(file);
      })
    } else {
      req.body.map(body => {
        if (!body.title || !body.fileURL) {
          res.status(400);
          return res.send("Title and author required");
        }
        new File(body).save((err, file) => {
          if (err) {
            console.error(err);
            return res.send(`Error adding file - ${err}`);
          }
          res.send("Successfully added lesson");
          return res.json(file);
        })
      })
    }
  },

  updateFile: (req, res) => {
    const id = req.query.fileId
    File.findByIdAndUpdate(id, req.body, (err, document) => {
      if (err) {
        console.error(err);
        return res.send(err);
      }
      document.save((err) => {
        if (err) {
          console.error(err);
          return res.send(err); 
        }
        res.send("Successfully updated file");
        return res.json(document);
      })
    })
  },

  deleteFile: (req, res) => {
    const id = req.query.fileId;
    File.findByIdAndDelete(id, (err) => {
      if (err) {
        console.error(err);
        return res.send(`Error finding file to delete - ${err}`);
      }
      return res.send("Successfully deleted file");
    })
  }
}

module.exports = FileContoller;
