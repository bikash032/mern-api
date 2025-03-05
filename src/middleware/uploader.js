const multer = require("multer");
const fs = require("node:fs");
const helper = require("../utils/helper");

const myStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    try {
      let path = "/public";
      if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true });
        cb(null, true);
      } else {
        cb(true, false);
      }
    } catch (exception) {
      throw exception;
    }
  },
  filename: (req, file, cb) => {
    let fname = Date.now() + helper.rendomString(30) + "-" + file.originalname;
    cb(null, fname);
  },
});

const uploader = (fileType = "image") => {
  let allowedExts = ["png", "jpg", "jpeg", "png", "webp", "gif"];
  if (fileType === "doc") {
    allowedExts = ["doc", "docx", "pdf", "ppt", "csv", "xlsx", "txt"];
  } else if (fileType === "audio") {
    allowedExts = ["mp3", "m8u8"];
  } else if (fileType === "video") {
    allowedExts = ["mp4", "wav"];
  }
  return multer({
    storage: myStorage,
    fileFilter: (req, file, cb) => {
      const ext = file.filename.split(".").pop();
      if (allowedExts.includes(ext.toLowerCase())) {
        cb(null, true);
      } else
        cb({
          code: 400,
          detatil: null,
          message: "image  or the file validation is failed",
          options: null,
          status: "VALIDATION_FAILED",
        });
    },
    limits: {
      fileSize: 1000000,
    },
  });
};

module.exports = { uploader };
