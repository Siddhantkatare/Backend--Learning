import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors( {
    origin: process.env.CORS_ORIGIN,
    Credential: true
}))

app.use(sxpress.json({limit: "16kb"}))
app.use(expres.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

export {app}