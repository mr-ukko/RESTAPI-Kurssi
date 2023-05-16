const express = require("express");
const app = express();
const cors = require('cors');
const exsession = require('express-session')
const bcrypt = require('bcrypt')
const bodyParser = require("body-parser");
const blogpostm = require('.RestAPI/blogpost_model');
const saltRounds = 10;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
const document = dom.window.document;

var adminRouter = require('./admin/adminInterface');
var blogpostRouter = require('./RestAPI/blogpost');
var accountsRouter = require('./RestAPI/accounts');
var session = exsession({secret: "cat-fish",resave: false, saveUninitialized: true,cookie: { maxAge: null}})

app.use(session);
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.json());
app.use(cors());
app.use('/adminBlogpostcreation', adminRouter)
app.use('/accounts', accountsRouter)
app.use('/blogPost', blogpostRouter)

app.get("/", function(req, res) {
  const blogpostjs = 0;
  blogpostm.getAll(function(err,dbResult){if(err){blogpostjs = JSON.parse(err);}else{blogpostjs = JSON.parse(dbResult);}})
  const formContainer = document.createElement("div");
  formContainer.style.textAlign = "center";
  for (let i = 0; i < blogpostjs.length; i++) {
    document.body.style.margin = "0";
    const smallInput = document.createElement("h4");
    smallInput.style.width = "300px";
    smallInput.value = blogpostjs[i].headline;
    smallInput.style.margin = "auto";
    smallInput.style.marginBottom = "10px";
    formContainer.appendChild(smallInput);
  }
  res.send(formContainer.outerHTML);
});

app.get("/createnew/:passWord", function(req, res) {
  bcrypt.hash(req.params.passWord, saltRounds,  function (err, hashed_pinCode) {
    res.send(hashed_pinCode);
  });
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
