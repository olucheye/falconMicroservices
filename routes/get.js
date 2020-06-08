const express = require("express");
const model = require("/model/dbModel");
const router = express.Router();

//Route Handler
function getAllFiles(req, res) {
  let files = model.find();
  res.status(200).json({
    status: "Successful",
    data: files,
  });
}

router.route("/").get(getAllFiles);

module.exports = router;
