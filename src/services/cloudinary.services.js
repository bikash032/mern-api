const cloudinary = require("cloudinary").v2;
const fs = require("node:fs");
require("dotenv").config()
class CloudinaryServices {
  constructor() {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_DB_NAME,
      api_key:process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET
    });
  }
  async uploadFile(filePath, folder = "") {
    try {
      const response = await cloudinary.uploader.upload(filePath, {
        unique_filename: true,
        folder: "/mern-50/" + folder,
      });
      fs.unlink(filePath);
      return {
        secure_url: response.secure_url,
        optimized_url: cloudinary.url(response.public_id, {
          fetch_format: "auto ",
          quality: "auto",
        }),
      };
    } catch (exception) {
      throw {
        code: 400,
        detail: null,
        message: "cloudinary error for the connection",
        status: "CLODINARY_CONNECTION_ERROR",
        option: null,
      };
    }
  }
}


const cloudinarySvc=new CloudinaryServices();
module.exports=cloudinarySvc