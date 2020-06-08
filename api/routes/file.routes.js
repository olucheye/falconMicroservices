module.exports = (app) => {
  const files = require("../controllers/file.controller");

  var router = require("express").Router();

  // Create a new file
  router.post("/", files.create);

  // Retrieve all files
  router.get("/", files.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", files.findOne);

  // Update a Tutorial with id
  router.put("/:id", files.update);

  // Delete a Tutorial with id
  router.delete("/:id", files.delete);

  // Create a new Tutorial
  router.delete("/", files.deleteAll);

  app.use("/api/v1", router);
};
