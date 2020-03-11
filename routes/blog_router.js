var express = require('express');
var router = express.Router();
var Blog=require('../controller/blog_controller')


router.post('/upload',Blog.upload)

router.get('/getall',Blog.getAllBlogs);
router.post('/getbyid', Blog.getSingleBlog);

//  router.post('/deletebyid',Testimonial.deletebyid)

module.exports = router;