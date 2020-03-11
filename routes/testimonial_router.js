  
var express = require('express');
var router = express.Router();
var Testimonial=require('../controller/testimonial_controller')


router.post('/upload',Testimonial.upload)

 router.get('/getall',Testimonial.getAllBanners);

 router.post('/deletebyid',Testimonial.deletebyid)

module.exports = router;