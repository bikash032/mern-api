const cloudinarySvc = require("../../services/cloudinary.services");
const mailSvc = require("../../services/mail.services");
const authSvc = require("./auth.services")
require("dotenv").config()
class AuthController{

    register=async(req, res, next)=>{
        try {
            let data=req.body;
             await authSvc.registerTransfer(req);
            // let userObj=await authSvc.createUser(data)
            // console.log(userObj);
await mailSvc.sendEmail({
    to:data.email,
    subject:"Activate your account",
    body:`
    <strong>Dear${data.name},</strong><br/>
    <p>Your account has been successfully registered.</p>
    <p> Please click the link below link to activate your account.</p>
    <a href='${process.env.FRONTED_URL}activate/?token='></a>
    <br/>
    <p> Regards ,</p>
    <strong>noreplay@gamil.com<br/>
    <small><em>Please do not replay to this email. Incase the link does not execute, copy past the given url.</em><small>
    `
})
            res.json({

            })
        } catch (err) {
            next({
                code:400,
                detatil:null,
                message:"Registeration is failed",
                status:"REGISTERATION_FAILED",
                option:null

            })
        }
    }

}
const authCtrl=new AuthController();
module.exports=authCtrl