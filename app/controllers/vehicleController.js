const { pg_client } = require("../adapters/database/postgresql")

async function getVehicleList(req, res) {
    try{
        const vehicleListResult = await pg_client.query("select id,vehicle_plate,current_status,is_active from vehicles")
        res.json(vehicleListResult.rows)
    }
    catch (e){
        res.status(404).send(e.message)
    }
}

async function vehicleAdd (req, res) {
    const vehicle = req.body
    try {
        await pg_client.query(`insert into vehicles(vehicle_plate,current_status,is_active) 
                       values('${vehicle.vehicle_plate}', ${vehicle.current_status}, ${vehicle.is_active})`)
        res.send("Araç Ekleme Başarılı")
    }
    catch (e){
        res.status(404).send(e.message)
    }

}

async function vehicleUpdate(req, res) {
    const vehicle = req.body
    try {
        await pg_client.query(`update vehicles set vehicle_plate='${vehicle.vehicle_plate}', current_status=${vehicle.current_status}, is_active=${vehicle.is_active} where id=${vehicle.id}`)
        res.send("Araç Güncelleme Başarılı")
    }
    catch (e){
        res.status(404).send(e.message)
    }
}

async function vehicleDelete(req, res) {
    const id = req.params.id
    try {
        await pg_client.query(`delete from vehicles where id=${id}`)
        res.send("Araç Silme Başarılı")
    }
    catch (e){
        res.status(404).send(e.message)
    }
}


exports.getVehicleList = getVehicleList
exports.vehicleDelete = vehicleDelete
exports.vehicleUpdate = vehicleUpdate
exports.vehicleAdd = vehicleAdd

//https://node-postgres.com/features/pooling