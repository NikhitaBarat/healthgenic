const express = require('express')
const axios = require('axios')
const router = express.Router()
require('dotenv').config()

// https://api.edamam.com/api/nutrition-data?app_id=01c4fbf2&app_key=1cc2e4bf7da780edb3e440a7b1daed71&nutrition-type=cooking&ingr=1%20cup%20rice

const BASE_URL = `https://api.edamam.com/api/nutrition-data?app_id=${process.env.NUTRITION_APP_ID}&app_key=${process.env.NUTRITION_APP_KEY}&nutrition-type=cooking`


router.get('/:qty/:unit/:food', async (req, res) => {
    try {
        const resp = await axios.get(`${BASE_URL}&ingr=${req.params.qty}%20${req.params.unit}%20${req.params.food}`)
        res.status(200).json(resp.data)
    }catch(err){
        res.send(err)
    }


})


module.exports = router