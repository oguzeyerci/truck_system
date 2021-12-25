const { getTypeList,typeAdd,typeDelete } =require("../controllers/deviceTypeController")
const express = require('express')
const router = express.Router()


router.route('/list').get(getTypeList)
router.route('/add').post(typeAdd)
router.route('/delete').delete(typeDelete)

module.exports = router