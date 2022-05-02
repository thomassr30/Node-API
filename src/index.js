import express from "express";
import cors from "cors";
import {config} from "dotenv";
import morgan from "morgan";
config()

const app = express();
const port = process.env.PORT

app.use(cors())
app.use(morgan('dev'))


app.listen(port , () =>{
    console.log(`Servidor corriendo en http://localhost:${port}`)
})
