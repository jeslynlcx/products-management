const express = require('express')
const app = express()
const PORT = 3000
const mongoose = require('mongoose')
const cors = require("cors")
const userRoutes = require("./routes/userRoute")
const productRoutes = require("./routes/productRoute")

require('dotenv').config()

mongoose 
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB Connected")
    })
    .catch(err => console.log(err))

const corsHandler = cors({
    origin: "*",
    methods: "GET.POST.PUT.DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 200,
    preflightContinue: true
})

app.use(corsHandler)
app.use("/users", userRoutes)
app.use("/products", productRoutes)

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})