import express from "express";
import cors from "cors";
import {config} from "dotenv";
import morgan from "morgan";
import {dbConnect} from './config/db.js'
import routerTracks from "./routes/tracks.js";
import routerStorage from "./routes/storage.js";


config()
dbConnect()
const app = express();
const port = process.env.PORT

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.static('storage'))

// declare routes
app.use('/API', routerTracks)
app.use('/API', routerStorage)


app.listen(port , () =>{
    console.log(`Servidor corriendo en http://localhost:${port}`)
})
