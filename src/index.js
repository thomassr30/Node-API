import express from "express";
import cors from "cors";
import {config} from "dotenv";
import morgan from "morgan";
import {dbConnect} from './config/db.js'
import routerTracks from "./routes/tracks.js";


config()
dbConnect()
const app = express();
const port = process.env.PORT

app.use(cors())
app.use(morgan('dev'))

// declare routes
app.use('/API', routerTracks)


app.listen(port , () =>{
    console.log(`Servidor corriendo en http://localhost:${port}`)
})
