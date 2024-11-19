import mongoose from "mongoose";

const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`\nMongoDB Connection Successful !! --> DB Host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB Connection Failed!!")
        process.exit(1)
    }
}

export default connectDB