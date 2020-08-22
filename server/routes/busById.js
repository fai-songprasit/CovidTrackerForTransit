const express = require('express')
const request = require('superagent')
const router = express.Router()

router.use(express.json())

//Arrival by stop number
//https://www.metlink.org.nz/api/v1/StopDepartures/5010

//bus service by number
//https://www.metlink.org.nz/api/v1/ServiceLocation/{busnumber}
//DestinationsStopName
//ServiceID
//VehicleRef

//bus route inclduing stop number "sms" and GPS
//https://www.metlink.org.nz/api/v1/ServiceMap/{busnumber}

router.get('/:serviceId', (req, res) => {
  request
    .get(`https://www.metlink.org.nz/api/v1/ServiceLocation/${req.params.serviceId}`)
    .then(result => {
      res.json(result.body)
    })
    .catch(err => {
      res.status(500)
      console.log(err)
    })
})

module.exports = router