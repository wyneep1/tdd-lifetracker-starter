const express = require("express")
const Nutrition = require("../models/nutrition")
const security = require("../middleware/security")
const router = express.Router()
//security.requireAuthenticatedUser

router.get("/",  async (req, res, next) => {
    try {
        //send json response to client with all of the user-owned nutrition instances in an array
        const { user } = res.locals
        const nutritions = await Nutrition.listNutritionForUser(user)
        return res.status(201).json({ nutritions })
    }
    catch(err) {
        next(err)
    }
})
router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
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
        const { nutritionId } = req.params
        const nutrition = await Nutrition.fetchNutritionById(nutritionId)
        return res.status(200).json({ nutrition })
    }
    catch(err) {
        next(err)
    }
})


module.exports = router