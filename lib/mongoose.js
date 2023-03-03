import mongoose from "mongoose";


const initMongoose = async () => {
    if (mongoose.connection.readyState === 1) {
        return mongoose.connection.asPromise();
    }else{
        console.log("connection failed")
    }
  return await mongoose.connect(process.env.MONGODB_URL)



}

export default initMongoose
