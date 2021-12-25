const { getLocationList,locationAdd } =require("../controllers/logLocationController")
const express = require('express')
const router = express.Router()


router.route('/list').get(getLocationList)
router.route('/add').post(locationAdd)

module.exports = router