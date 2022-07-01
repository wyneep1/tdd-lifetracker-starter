const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const authRoutes = require("./routes/auth")
const security = require("./middleware/security")
const nutritionRoutes = require("./routes/nutrition")
const { NotFoundError } = require("./utils/errors")

const app = express()

//enables cross-origin resource sharing for all origins
app.use(cors())

//parse incoming request bodies with JSON paylods
app.use(express.json())

//log request info
app.use(morgan("tiny"))

app.use(security.extractUserFromJwt)

app.use("/auth", authRoutes)
app.use("nutrition", nutritionRoutes)

app.use((req, res, next) => {
    return next(new NotFoundError())
})

app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message

    return res.status(status).json({
        error: {message, status},
    })
})


//health check
app.get('/', (req, res) => {
    res.status(200).json({ "ping" : "pong" })
  })



module.exports = app