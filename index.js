const express = require("express");
const app = express();
const cors = require('cors');
const exsession = require('express-session')
const bcrypt = require('bcrypt')
const bodyParser = require("body-parser");

const saltRounds = 10;

var adminRouter = require('./admin/adminInterface');
var session = exsession({secret: "cat-fish",resave: false, saveUninitialized: true,cookie: { maxAge: null}})

app.use(session);
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.json());
app.use(cors());
app.use('/adminBlogpostcreation', adminRouter)

app.get("/", function(req, res) {
  
});

app.get("/createnew/:passWord", function(req, res) {
  bcrypt.hash(req.params.passWord, saltRounds,  function (err, hashed_pinCode) {
    res.send(hashed_pinCode);
  });
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
