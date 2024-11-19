import dotenv from "dotenv"
import { app } from "./app.js"
import connectDB from "./db/index.js"


dotenv.config()



const port = process.env.PORT || 9000;

connectDB()
.then( () => {
    app.listen(port, () => {
        console.log(`App is Listening on Port: ${port}`)
    })
})
.catch( (error) => {
    console.log("MongoDB Connection Failed!", error)
})