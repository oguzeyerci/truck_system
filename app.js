const express = require('express')
const app = express()

const { pg_client } = require('./app/adapters/database/postgresql')
const { vehicleRoute } = require('./app/routes/vehicleRoute')
const { deviceRoute } = require('./app/routes/deviceRoute')
const { deviceTypeRoute } = require('./app/routes/deviceTypeRoute')
const { logTemperatureRoute } = require('./app/routes/logTemperatureRoute')
const { logLocationRoute } = require('./app/routes/logLocationRoute')


app.get('/',(req,res)=>{
    console.log("Ana Sayfa")
    res.send("<h2>Seçenekler:</h2>" +
        "<h2>/vehicle</h2> " +
        "<h2>/device</h2> " +
        "<h2>/deviceType</h2> " +
        "<h2>/logTemp</h2> " +
        "<h2>/logLocation</h2>")
})

//app.use('/vehicle',vehicleRoute)
//app.use(deviceRoute);
//app.use(deviceTypeRoute);
//app.use(logTemperatureRoute);
//app.use(logLocationRoute);


app.listen(3000)
