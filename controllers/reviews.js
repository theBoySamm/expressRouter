const Fruit = require("../models/User.model");

module.exports.collectReview = async (req, res) => {
  const { fname, lname, rating, text } = req.body;
  // console.log(fname, lname, rating, text);

  // Creates a new fruit
  const fruit = new Fruit({
    firstname: fname,
    lastname: lname,
    rating: rating,
    review: text,
  });

  fruit.save().then(() => console.log("Entry saved"));
  //   Fruit.find((err, fruits) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       mongoose.connection.close();

  //       const getName = fruits.map((n) => {
  //         return n.firstname;
  //       });
  //       console.log(getName);
  //     }
  //   });
  try {
      
  } catch (error) {
      
  }

  res.render("thanks");
};
