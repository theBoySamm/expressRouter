const express = require("express")
const mongoose  = require("mongoose")
const router = express.Router()
const Fruit = require("../models/User.model")
const {collectReview} = require('../controllers/reviews')

router.get("/", (req,res) => {

    res.render("reviews")
})
router.post("/", collectReview );

module.exports = router