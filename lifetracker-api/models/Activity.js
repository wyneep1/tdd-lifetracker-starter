const db = require("../db")

class Activity {
    static async calculateDailyCaloriesSummaryStats (email) {
        const query = `
        SELECT AVG(calories) AS calories,
        category 
        FROM nutrition
        JOIN users ON nutrition.user_id = users.id
        WHERE email=$1
        GROUP BY category
        LIMIT 6`;


        let result = await db.query(query, [email])
        
        return result.rows;

    }

    static async calculatePerCategoryCaloriesSummaryStats(email){
        const query = `
        SELECT SUM(calories) AS calories, 
        nutrition.created_at 
        FROM nutrition 
        JOIN users ON nutrition.user_id = users.id
        WHERE email=$1
        GROUP BY nutrition.created_at 
        LIMIT 6`;

        const result = await db.query(query, [email]);
        return result.rows;
    }
}
module.exports = Activity;