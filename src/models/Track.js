import mongoose from "mongoose";

const trackSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    album: {
        type: String,
        trim: true,
    },
    cover: {
        type: String,
        validate: {
            validator: (req) => {
                return true;
            },
            message: 'ERROR_URL'
        }
    },
    artist: {
        name: {
            type: String,
        },
        nickname: {
            type: String,
        },
        nationality: {
            type: String,
        }
    },
    duration: {
        start: {
            type: Number,
        },
        end: {
            type: Number,
        },
        mediaId: {
            type: mongoose.Types.ObjectId
        }
    }
},{
    timestamps: true,
    versionKey: false
})

export default mongoose.model('Track', trackSchema)