const express = require("express");
const model = require("/model/dbModel");
const router = express.Router();

//Route Handler
function getAllFiles(req, res) {
  let data = model.find();
  res.status(200).json({
    status: "true",
    message: "Files Found",
    files: data,
  });
}

router.route("/").get(getAllFiles);

module.exports = router;
