const mongoose=require("mongoose")
const dotenv=require("dotenv")

dotenv.config()
const connectDB = async () => {
    mongoose.connection.on("connected", () => console.log("Database Connected"));

    await mongoose.connect(`${process.env.MONGODB_URI}/hack`);
};


module.exports=connectDB