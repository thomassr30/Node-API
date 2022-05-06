import { matchedData } from 'express-validator'
import trackModel from '../models/Track.js'
import { handleHttpError } from '../utils/handleError.js'

export const getItems = async (req, res) => {
    
    try {
        const data = await trackModel.find({})
        res.send(data)
    } catch (error) {
        handleHttpError(res, 'ERROR_GET_ITEMS')
    }
}

export const getItem = async (req, res) => {
    const {id} = req.params
    try {
        req = matchedData(req)
        const data = await trackModel.findById(id)
        res.send(data)
    } catch (error) {
        handleHttpError(res, 'ERROR_GET_ITEM')
    }
}

export const createItem = async (req, res) => {
    
    try {
        const body = matchedData(req)
        const data = await trackModel.create(body)
        res.send({data})
    } catch (error) {
        handleHttpError(res, 'ERROR_CREATE_ITEM')
    }
}

export const updateItem = async (req, res) => {
    try {
        const {id, ...body} = matchedData(req)
        const data = await trackModel.findOneAndUpdate(id,body)
        res.send({data})
    } catch (error) {
        handleHttpError(res, 'ERROR_UPDATE_ITEM')
    }
}

export const deleteItem = async (req, res) => {

}