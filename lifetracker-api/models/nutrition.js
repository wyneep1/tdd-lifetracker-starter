const db = require("../db")
const { BadRequestError, NotFoundError } = require("../utils/errors")

class Nutrition {

    static async createNutrition({nutrition, user}) {
        //create new nutrition
        const requiredFields = ["name", "category", "calories", "quantity", "image_url"]
        requiredFields.forEach(field => {
            if (!nutrition.hasOwnProperty(field)){
                throw new BadRequestError(`Required field - missing ${field} in request body.`)
            }
        })
        const results = await db.query(`
        INSERT INTO nutrition (
            name, 
            category, 
            calories,
            quantity, 
            image_url,
            user_id
            )
            VALUES ($1, $2, $3, $4, $5, (SELECT id FROM users WHERE email = $6))
            RETURNING id, name, category, calories, quantity, image_url, user_id, created_at;
     `, 
     [nutrition.name, nutrition.category, nutrition.calories, nutrition.quantity, nutrition.image_url, user.email])

    return results.rows[0]
}
    static async fetchNutritionById (nutritionId) {

    const results = await db.query(
        `        SELECT nutr.id,
                   nutr.name,
                   nutr.category,
                   nutr.calories,
                   nutr.quantity,
                   nutr.image_url,
                   u.email AS "userEmail",
                   nutr.created_at
            FROM nutrition AS nutr
                LEFT JOIN users AS u ON u.id = nutr.user_id
            WHERE nutr.id = $1
        `, [nutritionId]
    )
    const nutrition = results.rows[0]
    if (!nutrition) {
        throw new NotFoundError("Not nutrition found")
    }
    return nutrition


}


static async listNutritionForUser() {
    const results = await db.query(
        ` SELECT nutr.id,
                   nutr.name,
                   nutr.category,
                   nutr.calories,
                   nutr.quantity,
                   nutr.image_url,
                   nutr.created_at
            FROM nutrition AS nutr
                LEFT JOIN users AS u ON u.id = nutr.user_id
            ORDER BY nutr.created_at DESC
        `,
    )
    return results.rows

}


}


module.exports = Nutrition