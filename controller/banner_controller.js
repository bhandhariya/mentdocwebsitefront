var Banner=require('../model/banner_model');
exports.upload=function(req,res,next){
    console.log(req.body);

    var banner=new Banner({
        title:req.body.title,
        photoUrl:req.body.photoUrl
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
    Banner.find(function(err,result){
        if(!err && result){
            res.send(result)
        }
    })
}

exports.deletebyid=function(req,res,next){
    var data=req.body;
    console.log(data.id);
    Banner.findByIdAndRemove(data.id).exec(function(er,resut){
        if(resut){
            res.send(resut)
        }
    })
}