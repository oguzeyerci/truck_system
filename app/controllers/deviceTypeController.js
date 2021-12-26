const { pg_client } = require("../adapters/database/postgresql")

async function getTypeList(req, res) {
    try{
        const typeListResult = await pg_client.query("select id,device_name,device_description,is_active from devices_type")
        res.json(typeListResult.rows)
    }
    catch (e){
        res.status(404).send(e)
    }
}

async function typeAdd(req, res) {
    const deviceType = req.body
    try {
        await pg_client.query(`insert into devices_type(device_name,device_description,is_active) 
                       values('${deviceType.device_name}', '${deviceType.device_description}',${deviceType.is_active})`)
        res.send("Cihaz Tipi Ekleme Başarılı")
    }
    catch (e){
        res.status(404).send(e.message)
    }
}

async function typeDelete(req, res){
    const id = req.params.id
    try {
        await pg_client.query(`delete from devices_type where id=${id}`)
        res.send("Cihaz Tipi Silme Başarılı")
    }
    catch (e){
        res.status(404).send(e.message)
    }
}

exports.typeDelete=typeDelete
exports.typeAdd=typeAdd
exports.getTypeList=getTypeList
