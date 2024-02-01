var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Luigi",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Bob",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Message Board!", messages: messages });
});

/* GET message form page. */
router.get("/new", function (req, res, next) {
  res.render("new", { title: "Enter a new Message!" });
});

// Get data from the form
router.post("/new", function (req, res, next) {
  const userName = req.body.userName;
  const messageText = req.body.messageText;

  messages.push({ text: messageText, user: userName, added: new Date() });

  res.redirect("/");
});

module.exports = router;
