const Joi=require("joi")
const userRegisterationDTO=Joi.object({
    name:Joi.string().min(2).max(50).required(),
    email:Joi.string().email().required(),
    password:Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
    confirmPassword:Joi.string().allow(Joi.ref("password")).required(),
    role:Joi.string().pattern(/customer|seller|admin/).default("customer"),
    gender:Joi.string().pattern(/male|female|other/).optional(),
    address:Joi.string(),
    phone:Joi.string()
})
module.exports={userRegisterationDTO}