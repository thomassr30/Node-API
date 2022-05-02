import storageModel from '../models/Storage.js'
import {config} from 'dotenv'
config()
const PUBLIC_URL = process.env.PUBLIC_URL

export const getItems = async (req, res) => {
    const data = await storageModel.find({})
    res.send(data)
}

export const getItem = (req, res) => {

}

export const createItem = async (req, res) => {
    const {body, file} = req
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData)
    res.send(data)
}

export const updateItem = (req, res) => {

}

export const deleteItem = (req, res) => {

}