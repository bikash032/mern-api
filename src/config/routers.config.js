const authRoutes = require("../module/auth/auth.routes");

const routers=require("express").Router()


routers.use("/auth",authRoutes);
// routers.use("/category",catRoutes);
// routers.use("/brand",brandRoutes)



module.exports=routers