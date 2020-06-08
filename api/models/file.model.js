module.exports = (mongoose) => {
  const File = mongoose.model(
    "file",
    mongoose.Schema(
      {
        name: String,
      },
      { timestamps: true }
    )
  );

  return File;
};
