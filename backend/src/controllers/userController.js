const connection = require("../sqlConnection")

const login = async (req, res)=>{
    const {emailId, password} = req.body
    let sqlQuerySelect = `SELECT * FROM user WHERE email= "${emailId}"`;

    let query = connection.query(sqlQuerySelect, (err, results) => {
        if(err) {
            return res.send(apiResponse(err));
        }
        
        data = results[0]
        
        if(data == undefined){
            return res.send(apiResponse(404,"emailId does not exist in the database!",data));
        }else if(Date.now() - data.bolckedTime < (24 * 60 * 60 * 1000)){

            let timeLeft = Date.now() - data.bolckedTime

            timeLeft = timeLeft / 1000 //sec
            timeLeft = timeLeft / 60 //mins
            timeLeft = timeLeft / 60 //hour
            timeLeft = 24 - Math.floor(timeLeft) + " hours"
             
            return res.send(apiResponse(401, `you have been blocked! please try again after ${timeLeft}`, null))
        }else if(data.password != password){
            if(data.loginAttempts == 4){
                connection.query(`update user set bolckedTime = ${Date.now()} where email = "${data.email}"`)
                connection.query(`update user set loginAttempts = ${0} where  email = "${data.email}"`)
                return res.send(apiResponse(401, "you have been blocked for 24 hours", null))

            }
            connection.query(`update user set loginAttempts = ${(data.loginAttempts) + 1} where  email = "${data.email}"`)
            return res.send(apiResponse(401,`invalid credentials! you have ${ 4 - (data.loginAttempts)} attempts left`, null));
        }else{
            connection.query(`update user set loginAttempts = ${0} where  email = "${data.email}"`)
            connection.query(`update user set bolckedTime = ${0} where  email = "${data.email}"`)
            res.send(apiResponse(200,"loggedin",data));
        }
    });
}
function apiResponse(statusCode, message, data){
    return { "status":statusCode, "message": message, "data": data}
}

module.exports = {login}