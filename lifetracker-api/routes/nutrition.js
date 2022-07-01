const express = require("express")
const Nutrition = require("../models/nutrition")
const security = require("../middleware/security")
const router = express.Router()

router.post("/", async (req, res, next) => {
    try {
        
        const { user } = res.locals
        const nutrition = await Nutrition.createNutrition({nutrition: req.body, user})
        return res.status(201).json({ nutrition })
    }
    catch(err) {
        next(err)
    }
})

router.get("/:nutritionId", async (req, res, next) => {
    try {
        
    }
    catch(err) {
        next(err)
    }
})

//security.requireAuthenticatedUser

module.exports = router