const express = require("express")
const mongoose  = require("mongoose")
const router = express.Router()
const Fruit = require("../models/User.model")


router.get("/", (req,res) => {

    res.render("users")
})
router.post("/", (req, res) => {
    const {fname, lname, rating, text} = req.body
    console.log(fname, lname, rating, text);

    // Creates a new fruit
    const fruit = new Fruit({
        firstname:fname,
        lastname: lname,
        rating:rating,
        review:text
    })
    

    Fruit.find((err, fruits)=> {
        if(err){
            console.log(err);
        } else{
            mongoose.connection.close()

            const getName = fruits.map((n) =>{
                return n.firstname
            })
            console.log(getName);
        }
    })
    fruit.save();

  res.render("thanks");
});

module.exports = router