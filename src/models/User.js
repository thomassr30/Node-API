import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    role: {
        type: ['user', 'admin'],
        default: 'user'
    }
},{
    timestamps: true,
    versionKey: false
})

export default mongoose.model('User', userSchema)