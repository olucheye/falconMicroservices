const Thing = require("../models/thing");


exports.remove = (req, res, next) => {
  Thing.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        status: true,
        message: "File Deleted",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
