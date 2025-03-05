const cloudinarySvc = require("../../services/cloudinary.services");
const bcrypt=require("bcryptjs");
const helper = require("../../utils/helper");
const mailSvc = require("../../services/mail.services");
class AuthServices{
    registerTransfer=async(req)=>{
        try {
            let data=req.body;

            let file=await cloudinarySvc.uploadFile(req.file.path,"users")
            data.password = bcrypt.hashSync(data.password,10);
            data.image=file;
            data.status="inactive";
            data.activationToken=helper.rendomString(100);
            delete data.confirmPassword; 
            await mailSvc.sendEmail({
                to:data.email,
                sun
            })
        } catch (exception) {
            throw exception
        }
    }

}
const authSvc=new AuthServices()
module.exports=authSvc