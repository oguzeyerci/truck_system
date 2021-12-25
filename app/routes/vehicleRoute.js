const vehicleController=require("../controllers/vehicleController")
const express = require('express')
const router = express.Router()


router.route("/vehicle_list").get(vehicleController.getVehicles)