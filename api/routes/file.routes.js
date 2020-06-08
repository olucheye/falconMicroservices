module.exports = (app) => {
  const files = require("../controllers/file.controller");

  var router = require("express").Router();

  // Create a new file
  router.post("/", files.create);

  // Retrieve all files
  router.get("/", files.findAll);

  // Retrieve a single File with id
  router.get("/:id", files.findOne);

  // Update a File with id
  router.put("/:id", files.update);

  // Delete a File with id
  router.delete("/:id", files.delete);

  // Create a new File
  router.delete("/", files.deleteAll);

  app.use("/api/v1", router);
};
