const { pg_client } = require("../adapters/database/postgresql")

async function getTempList(req, res) {
    try{
        const tempListResult = await pg_client.query("select id,vehicle_id,device_id,read_data,created_at from log_temperature")
        res.json(tempListResult.rows)
    }
    catch (e){
        res.status(404).send(e)
    }
}

async function tempAdd(req, res){
    const templog = req.body
    try {
        await pg_client.query(`insert into log_temperature(vehicle_id,device_id,read_data,created_at) 
                       values(${templog.vehicle_id}, ${templog.device_id}, '${templog.read_data}',to_timestamp(${Date.now()}))`)
        res.send("Sıcaklık Log Eklendi")
    }
    catch (e){
        res.status(404).send(e.message)
    }
}

exports.tempAdd = tempAdd
exports.getTempList = getTempList