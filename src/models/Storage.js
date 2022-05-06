import mongoose from "mongoose";

const storageSchema = new mongoose.Schema({
    url: {
        type: String
    },
    filename: {
        type: String
    }
},{
    timestamps: true,
    versionKey: false
})

export default mongoose.model('Storage', storageSchema)