var Test=require('../model/testimonial_model');
exports.upload=function(req,res,next){
    console.log(req.body);

    var banner=new Test({
        title:req.body.title,
        image:req.body.image,
        name:req.body.name,
        text:req.body.text
    })
    banner.save(function(err,result){
        if(!err && result){
            res.send(result)
        }else{
            return res.send(err)
        }
    })
}

exports.getAllBanners=function(req,res,next){
    Test.find(function(err,result){
        if(!err && result){
            res.send(result)
        }
    })
}

exports.deletebyid=function(req,res,next){
    var data=req.body;
    console.log(data.id);
    Test.findByIdAndRemove(data.id).exec(function(er,resut){
        if(resut){
            res.send(resut)
        }
    })
}