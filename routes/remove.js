// const Thing = require("../models/thing");
// const {Storage} = require('@google-cloud/storage');

// Creates a client
// const storage = new Storage();

exports.remove = async (req, res, next) => {
//   try{
  // Deletes the file from the bucket
//   await storage.bucket('name_of_bucket').file("name_of_file").delete();

//   console.log(`gs://${'name_of_bucket'}/${"name_of_file"} deleted.`);
  model.deleteOne({ _id: req.params.id })
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
//   } catch(error){
//     console.log(error);
//   }
};
