const { pg_client } = require("../adapters/database/postgresql")

async function getLocationList(req, res) {
    try{
        const locationListResult = await pg_client.query("select id,vehicle_id,device_id,latitude,longitude,created_at from log_location")
        res.json(locationListResult.rows)
    }
    catch (e){
        res.status(404).send(e)
    }
}

async function locationAdd(req, res){
    const locationlog = req.body
    try {
        await pg_client.query(`insert into log_temperature(vehicle_id,device_id,latitude,longitude,created_at) 
                       values(${locationlog.vehicle_id}, ${locationlog.device_id}, '${locationlog.latitude}', '${locationlog.longitude}',to_timestamp(${Date.now()}))`)
        res.send("GPS Log Eklendi")
    }
    catch (e){
        res.status(404).send(e.message)
    }
}

exports.locationAdd = locationAdd
exports.getLocationList = getLocationList
