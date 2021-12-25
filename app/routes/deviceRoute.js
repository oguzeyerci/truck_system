const { getDeviceList,deviceAdd,deviceUpdate,deviceDelete } =require("../controllers/deviceController")
const express = require('express')
const router = express.Router()


router.route('/list').get(getDeviceList)
router.route('/add').post(deviceAdd)
router.route('/update').patch(deviceUpdate)
router.route('/delete').delete(deviceDelete)

module.exports = router