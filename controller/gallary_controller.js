var Gallary=require('../model/gallary_model');


exports.upload=function(req,res,next){
    console.log(req.body);

    var gallary=new Gallary({
        title:req.body.title,
        photoUrl:req.body.photoUrl,
       
    })
    gallary.save(function(err,result){
        if(!err && result){
            res.send(result)
        }else{
            return res.send(err)
        }
    })
}

exports.getAllBanners=function(req,res,next){
    Gallary.find(function(err,result){
        if(!err && result){
            res.send(result)
        }
    })
}

exports.deletebyid=function(req,res,next){
    var data=req.body;
    console.log(data.id);
    Gallary.findByIdAndRemove(data.id).exec(function(er,resut){
        if(resut){
            res.send(resut)
        }
    })
}