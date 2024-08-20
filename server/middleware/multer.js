const multer = require("multer");
const path = require('path')

const MulterInstance = multer.memoryStorage({
  destination: function (req, file, cb) {
    cb(null, "./tempImages");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({ storage: MulterInstance });
module.exports = upload;
