var Blog=require('../model/blog_model');
exports.upload=function(req,res,next){
    console.log(req.body);

    var banner=new Blog({
        title:req.body.title,
        image:req.body.image,
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

exports.getAllBlogs=function(req,res,next){
    Blog.find(function(err,result){
        if(!err && result){
            res.send(result)
        }
    })
}
exports.getSingleBlog = function(req, res) {

    Blog.findById(req.body.id,function (err,result) {
        if(!err && result){
            res.send(result)
        }
        });
    
};