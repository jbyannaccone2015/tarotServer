const express = require('express')

const router = express.Router()

router.get("/", (req, res) => {
    res.send("Arrived at deck route!")
})

router.get("/1", (req, res) =>{
    res.send("Arrived at card 1 route!")
})



module.exports = router;