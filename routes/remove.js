const File = require("../models/file.model");
exports.remove = (req, res, next) => {
  File.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        status: true,
        message: "File Deleted",
      });
    })
    .catch((error) => {
      res.status(400).json({
        status: error,
      });
    });
};
