import trackModel from '../models/Track.js'

export const getItems = async (req, res) => {
    const data = await trackModel.find({})
    res.send(data)
}

export const getItem = (req, res) => {

}

export const createItem = async (req, res) => {
    const {body} = req
    const data = await trackModel.create(body)
    res.send(data)
}

export const updateItem = (req, res) => {

}

export const deleteItem = (req, res) => {

}