const { bodyValidator } = require("../../middleware/auth.validator")
const { uploader } = require("../../middleware/uploader")
const authCtrl = require("./auth.controller")
const { userRegisterationDTO } = require("./auth.validator")

const authRoutes=require("express").Router()

authRoutes.use("/register",uploader().single("image"),bodyValidator(userRegisterationDTO),authCtrl.register)



module.exports=authRoutes