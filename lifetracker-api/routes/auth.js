const express = require("express")
const router = express.Router()
const User = require("../models/user")

router.post("/login", async(req, res, next) => {
    try {
        // take users email and pass, attempt to authenticate
        
        const user = await User.login(req.body)
        return res.status(200).json({ user })
    }
    catch (err){
        next(err)
    }
})

router.post("/register", async(req, res, next) => {
    try {
        // take users info
        // create new user in database
        const user = await User.register(req.body)
        return res.status(201).json({ user })
    }
    catch (err){
        next(err)
    }
})

module.exports = router