const mongoose=require("mongoose")

const dbInitilize=async()=>{
    try {
        await mongoose.connect(process.env.DB_URL,{
            dbName:process.env.DB_NAME,
            autoCreate:true,
            autoIndex:true
        })
        console.log("DB connection is successully");
        
    } catch (err) {
        console.log("Error while connection of DB");
        
        
    }
}
dbInitilize()