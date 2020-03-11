var express = require('express');
var router = express.Router();
var Gallary=require('../controller/gallary_controller')


/* GET home page. */


router.post('/upload',Gallary.upload)

router.get('/getbanner',Gallary.getAllBanners);

router.post('/deleteBanerByid',Gallary.deletebyid)

module.exports = router;
