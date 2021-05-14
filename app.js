const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose')
const Card = require('./models/card')
require('dotenv').config()

const user = process.env.DB_USER
const pass = process.env.DB_PASS

mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0.swqkf.mongodb.net/tarotDeck?retryWrites=true&w=majority`, { useNewUrlParser: true,  useUnifiedTopology: true })
    .then((result) => {
        console.log("Connected")
    })
    .catch((err) => console.log(err))



app.get("/card", (req, res) => {
    Card.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) =>{
        console.log(err)
    })
})

app.get("/cards/:position", (req, res) => {
    Card.find({position: req.params.position})
    .then((result) => {
        if (result.length > 0) {
            res.send(result)
            console.log(result)    
        } else {
            res.send(`Card not found`)
        }
    })
    .catch((err) =>{
        console.log(err)
    })
})

app.listen(PORT, () => {
    console.log(`it works`)
})
