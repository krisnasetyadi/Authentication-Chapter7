const jwt = require('jsonwebtoken')
require('dotenv').config()

module.export = function(req,res){
    const token = req.header('jwt_token')

if(!token){
    return res.status(403).json({message:'Your Access Denied'})
}
try {
    const verify = jwt.verify(token,process.env.JWT_TOKEN_SECRET)
    
    req.user = verify.user;
    next()
} catch (err){
    res.status(401).json({message:'Token not valid'})
}
}