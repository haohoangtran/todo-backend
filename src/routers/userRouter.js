const express = require('express')
const router = express.Router()
const { User } = require("../models")

router.post("/register", async (req, res) => {
    const body = req.body
    const { error, value } = User.validate(body)
    res.json({ error, value })
})

router.post("/login", async (req, res) => {

})
module.exports = router