import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"





const app = express()


/* CONFIGURATION */


app.get("/", (req, res) => {
    res.send("Hello World!!")
})
app.use(cors())

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))

app.use(helmet())
app.use(helmet.crossOriginResourcePolicy( {policy: "cross-origin"} ))
app.use(morgan("common"))





/* ROUTES IMPORT */

import clientRoutes from "./routes/client.routes.js"
import generalRoutes from "./routes/general.routes.js"
import managementRoutes from "./routes/management.routes.js"
import salesRoutes from "./routes/sales.routes.js"


/* ROUTES */

app.use("/client", clientRoutes)
app.use("/general", generalRoutes)
app.use("/management", managementRoutes)
app.use("/sales", salesRoutes)



export { app }