const express = require('express')
const router = express.Router()
const City = require('../../models/City')
const moment = require('moment')
const axios = require('axios')

router.get('/city/:cityName', function(req, res) {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${req.params.cityName}&appid=567fe94d45b979cf5923a67408826ca9`)
        .then(function(response) {
            res.send(response.data)
        })

})





router.get('/cities', function(req, res) {
    City.find({}).exec(function(err, result) {
        res.send(result)
    })
})





router.post('/city', function(req, res) {
    let newCity = new City(req.body)
    newCity.save()
    res.end()
})






router.delete('/city/:cityName', function(req, res) {
    const cityName = req.params.cityName
    City.deleteMany({ name: cityName }, function(err) {
        if (err)
            res.send(err)
        else
            res.send("ok")
    })
})


module.exports = router