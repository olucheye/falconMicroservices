const express = require("express");
const multer = require("multer");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = require("./api/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

require("./api/routes/file.routes")(app);

const port = process.env.PORT || 3000;
app.listen(port, () => `Server now running on ${port}`);
