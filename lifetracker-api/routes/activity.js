const express = require('express');
const router = express.Router();
const security = require("../middleware/security")
const Activity = require("../models/Activity")


router.get("/dailyCalories", security.requireAuthenticatedUser , async (req, res, next)=> {
try {
    const {email} = res.locals.user
    const dailyCalories = await Activity.calculateDailyCaloriesSummaryStats(email)
    return res.status(200).json({ dailyCalories: dailyCalories })

} catch(err){
    next(err)

}
})

router.get("/totalCalories", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const {email} = res.locals.user
        const totalCalories = await Activity.calculatePerCategoryCaloriesSummaryStats(email);
        return res.status(200).json({ totalCalories: totalCalories })
    }
    catch (err) {
        next(err);
    }
})

module.exports = router;