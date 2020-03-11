  
var express = require('express');
var router = express.Router();
var Banner=require('../controller/banner_controller')


/* GET home page. */
router.get('/many', function(req,res){
    var data=[
        {name:"https://picsum.photos/900/500?random&t=0.8257184852337527"},
        {name:"https://picsum.photos/900/500?random&t=0.8575731283508712"},
        {name:"https://picsum.photos/900/500?random&t=0.2628932351496769"},
        {name:"https://picsum.photos/900/500?random&t=0.8804361194509023"}

    ];
    res.send(data);
});

router.post('/upload',Banner.upload)

router.get('/getbanner',Banner.getAllBanners);

router.post('/deleteBanerByid',Banner.deletebyid)

module.exports = router;