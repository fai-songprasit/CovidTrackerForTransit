const express = require('express')
const request = require('superagent')
const router = express.Router()

router.use(express.json())

//Arrival by stop number
//https://www.metlink.org.nz/api/v1/StopDepartures/5010

router.get('/StopDepartures/:Sms', (req, res) => {
  // console.log("Req.params: ", req.params);
  request
    .get(`https://www.metlink.org.nz/api/v1/StopDepartures/${req.params.Sms}`)
    .then(result => {
      res.json(result.body)
    })
    .catch(err => {
      res.status(500)
      console.log(err)
    })
})


router.get('/StopNearby/:lat/:lon', (req, res) => {
  // console.log("Req.params: ", req.params);
  request
    .get(`https://www.metlink.org.nz/api/v1/StopNearby/${req.params.lat}/${req.params.lon}`)
    .then(result => {
      res.json(result.body)
    })
    .catch(err => {
      res.status(500)
      console.log(err)
    })
})



//bus service by number
//https://www.metlink.org.nz/api/v1/ServiceLocation/{busnumber}
//DestinationsStopName
//ServiceID
//VehicleRef

//bus route inclduing stop number "sms" and GPS
//https://www.metlink.org.nz/api/v1/ServiceMap/{busnumber}

router.get('/serviceId/:serviceId', (req, res) => {
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