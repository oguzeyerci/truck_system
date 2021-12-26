const { pg_client } = require("../adapters/database/postgresql")

//arrow function version

exports.getDeviceList = async (req, res) => {
    try{
        const deviceListResult = await pg_client.query("select id,vehicle_id,device_type_id,device_name,is_online,is_active from devices")
        res.json(deviceListResult.rows)
    }
    catch (e){
        res.status(404).send(e)
    }
}

exports.deviceAdd = async (req, res) => {
    const device = req.body
    try {
        await pg_client.query(`insert into devices(vehicle_id,device_type_id,device_name,is_online,is_active) 
                       values(${device.vehicle_id}, ${device.device_type_id}, '${device.device_name}',${device.is_online},${device.is_active})`)
        res.send("Cihaz Ekleme Başarılı")
    }
    catch (e){
        res.status(404).send(e.message)
    }
}

exports.deviceUpdate = async (req, res) => {
    const device = req.body
    try {
        await pg_client.query(`update devices set vehicle_id=${device.vehicle_id},device_type_id=${device.device_type_id},device_name='${device.device_name}',is_online=${device.is_online},is_active=${device.is_active} where id=${device.id}`)
        res.send("Araç Güncelleme Başarılı")
    }
    catch (e){
        res.status(404).send(e.message)
    }
}

exports.deviceDelete = async (req, res) => {
    const id = req.params.id
    try {
        await pg_client.query(`delete from devices where id=${id}`)
        res.send("Cihaz Silme Başarılı")
    }
    catch (e){
        res.status(404).send(e.message)
    }
}

