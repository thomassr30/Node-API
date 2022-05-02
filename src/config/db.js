import mongoose from "mongoose";



export const dbConnect = () => {
    const DB_URI = process.env.MONGO_DB
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },(err, res) => {
        if(!err){
            console.log('Conexión correcta')
        }else{
            console.log('Error de conexión')
        }
    })
}