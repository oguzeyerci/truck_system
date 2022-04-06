const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const { pg_client }  = require('./app/adapters/database/postgresql')
const vehicleRoute  = require('./app/routes/vehicleRoute')
const deviceRoute  = require('./app/routes/deviceRoute')
const deviceTypeRoute  = require('./app/routes/deviceTypeRoute')
const logTemperatureRoute  = require('./app/routes/logTemperatureRoute')
const logLocationRoute  = require('./app/routes/logLocationRoute')

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get('/',(req,res)=>{
    console.log("Ana Sayfa")
    res.send("<h2>Options:</h2>" +
        "<h2>/vehicle</h2> " +
        "<h2>/device</h2> " +
        "<h2>/deviceType</h2> " +
        "<h2>/logTemp</h2> " +
        "<h2>/logLocation</h2>")
})


app.use('/vehicle',vehicleRoute)
app.use('/device',deviceRoute);
app.use('/deviceType',deviceTypeRoute);
app.use('/logTemperature',logTemperatureRoute);
app.use('/logLocation',logLocationRoute);


app.listen(3000)
