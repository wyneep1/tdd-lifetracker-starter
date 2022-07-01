const db = require("../db")
const bcrypt = require('bcrypt')
const { BadRequestError, UnauthorizedError } = require("../utils/errors")
const {BCRYPT_WORK_FACTOR} = require('../config')


class User{
    static async makePublicUser(user) {
        return {
            id: user.id,
            email: user.email,
            username: user.username,
            first_name: user.first_name,
            last_name: user.last_name,
            created_at: user.created_at,
            updated_at: user.updated_at
        }
    }

static async login(credentials) {
    const requiredFields = ["email", 'password']
    requiredFields.forEach(field => {
        if (!credentials.hasOwnProperty(field)) {
            throw new BadRequestError(`Missing ${field} in request body.`)
        }
    })
    //looking the user in the db by email
    const user = await User.fetchUserByEmail(credentials.email)
    if (user) {
        const isValid = await bcrypt.compare(credentials.password, user.password)
        if (isValid) {
            return User.makePublicUser(user)
        }
    }
    // if the user is found, compare the password with the submitted password
    // if they match, return user
    // else throw an error
    throw new UnauthorizedError("Invalid email/password")
}

static async register(credentials){
    const requiredFields = ["email", "password", "username", "first_name", "last_name"]
    requiredFields.forEach(field => {
        if (!credentials.hasOwnProperty(field)) {
            throw new BadRequestError(`Missing ${field} in request body.`)
        }
    })

    if(credentials.email.indexOf('@') <= 0) {
        throw new BadRequestError('Invalid email')
    }
    // make sure no user in db exist with that email
    // if user exist, throw an error
    const existingUser = await User.fetchUserByEmail(credentials.email)
    if (existingUser) {
        throw new BadRequestError(`Duplicate email: ${credentials.email}`)
    }

const hashedPw = await bcrypt.hash(credentials.password, BCRYPT_WORK_FACTOR)
// lowercase email
const lowercasedEmail = credentials.email.toLowerCase()
//create new user in the db with given info
const result = await db.query(`
    INSERT INTO users (
        email,
        password,
        first_name,
        last_name,
        username
    )
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id, email, password, first_name, last_name, username, created_at;
`,
[lowercasedEmail, hashedPw, credentials.first_name, credentials.last_name, credentials.username])
//return user
    return User.makePublicUser(result.rows[0])
}
static async fetchUserByEmail(email) {
    if (!email) {
        throw new BadRequestError("No email provided")
    }

    const query = `SELECT * FROM users WHERE email = $1`

    const result = await db.query(query, [email.toLowerCase()])

    const user = result.rows[0]

    return user
}

}

module.exports = User;