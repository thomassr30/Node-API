
export const customHeader = (req, res, next) => {
    try {
        const apiKey = req.headers.api_key;
        if(apiKey === 'api-publica'){
            next()
        }else{
            res.status(403)
        res.send({error: 'Api key no es correcta'})
        }
    } catch (error) {
        res.status(403)
        res.send({error: 'Algo ocurrio en el custom header'})
    }
}