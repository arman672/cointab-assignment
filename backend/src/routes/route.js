const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")

router.post("/backend/login",userController.login)

router.all("/*",(req,res)=>{
    return res.send("does not exist")
})

module.exports = router