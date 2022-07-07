const express = require('express')
const router = express.Router()
const { User } = require("../models")
const { httpCode } = require("../config")

router.post("/register", async (req, res) => {
    const body = req.body
    //validate du lieu nguoi dugn day len
    const { error, value } = User.validate(body)
    if (error) {
        return res.status(httpCode.BAD_REQUEST).json({ msg: error.message })
    }
    res.json({ error, value })
})

router.post("/login", async (req, res) => {

})
module.exports = router