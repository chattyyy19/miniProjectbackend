var jwt = require('jsonwebtoken');

async function auth(req, res, next){

    try {

        let token = req.headers.token;
        if(token){
            isValid = jwt.verify(token, "helloWorld")
            if(isValid){
                req.tokenData = isValid;
                next();
            }
            else{
                throw('err')
            }
        }
        else{
            throw('err')
        }

    } catch (error) {
        res.status(401);
        console.log(error);
        res.send("Cannot Authenticate Token")
    }

}

module.exports = {auth}