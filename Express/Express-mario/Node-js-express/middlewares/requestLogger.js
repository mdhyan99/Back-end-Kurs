function requistLogger(req,res,next){
    console.log(req.originalUrl);
    next()
}
module.exports =requistLogger