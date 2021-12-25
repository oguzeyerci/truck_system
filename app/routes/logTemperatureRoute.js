const { getTempList,tempAdd } =require("../controllers/logTemperatureController")
const express = require('express')
const router = express.Router()


router.route('/list').get(getTempList)
router.route('/add').post(tempAdd)

module.exports = router