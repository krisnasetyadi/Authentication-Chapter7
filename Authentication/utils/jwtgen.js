const jwt = require('jsonwebtoken')
const jwtGenerator = require('../../../../jwt tutor/pern-jwt-tutorial-master/server/utils/jwtGenerator')
require('dotenv').config

function jwtGenerator(user_id){
    const payload = {
        user: {
            id: user_id
        }
    }
    return jwt.sign(payload,prcess.env.JWT_TOKEN_SECRET,{expiresIn:'1h'})
}
module.exports = jwtGenerator