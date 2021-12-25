const { getVehicleList,vehicleAdd,vehicleUpdate,vehicleDelete } =require("../controllers/vehicleController")
const express = require('express')
const router = express.Router()


router.route('/list').get(getVehicleList)
router.route('/add').post(vehicleAdd)
router.route('/update').patch(vehicleUpdate)
router.route('/delete').delete(vehicleDelete)

module.exports = router