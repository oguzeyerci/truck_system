const { pg_client } = require("../adapters/database/postgresql")

async function getTypeList(req, res) {
    try{
        const typeListResult = await pg_client.query("select id,type_name,type_description,is_active from devices_type")
        res.json(typeListResult.rows)
    }
    catch (e){
        res.status(404).send(e)
    }
}

async function typeAdd(req, res) {

}

async function typeDelete(req, res){

}

exports.typeDelete=typeDelete
exports.typeAdd=typeAdd
exports.getTypeList=getTypeList
