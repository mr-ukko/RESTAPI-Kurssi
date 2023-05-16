const express = require("express");
const router = express.Router();
const account = require('../RestAPI/accounts_model');
const http = require('http');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;



const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
const document = dom.window.document;

router.get("/", function(req, res) {
    req.session.loggedin = false;
    req.session.save();
    document.body.style.margin = "0";
    const smallInput = document.createElement("input");
    smallInput.type = "text";
    smallInput.style.width = "300px";
    smallInput.placeholder = "username";
    smallInput.name = "user";

    const smallInput2 = document.createElement("input");
    smallInput2.type = "text";
    smallInput2.style.width = "300px";
    smallInput2.placeholder = "password";
    smallInput2.name = "password";

    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.id = "button";
    submitButton.type = "submit";

    smallInput.style.margin = "auto";
    submitButton.style.margin = "auto";
    smallInput.style.marginBottom = "10px";
    submitButton.style.marginTop = "10px";

    const formContainer = document.createElement("div");
    formContainer.style.textAlign = "center";
    
    // create the form element and set its attributes
    const form = document.createElement("form");
    form.action = "/adminBlogpostcreation/login";
    form.method = "POST";

    // append the input elements and submit button to the form element
    form.appendChild(smallInput);
    form.appendChild(smallInput2);
    form.appendChild(submitButton);

    // append the form element to the form container
    formContainer.appendChild(form);

    // send the HTML response to the client
    res.send(formContainer.outerHTML);
});



router.get('/addnew', function (req, res){
    if(req.session.loggedin = true){
    // create the small input box
  document.body.style.margin = "0";
  const smallInput = document.createElement("input");
  smallInput.type = "text";
  smallInput.style.width = "300px";
  smallInput.placeholder = "Enter a short message";

  // create the bigger input box
  const bigInput = document.createElement("textarea");
  bigInput.placeholder = "Enter a longer message";
  bigInput.style.width = "300px";
  bigInput.style.height = "100px";

  // create the submit button
  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.id = "button";
  submitButton.type = "submit";
  
  smallInput.style.display = "block";
  bigInput.style.display = "block";
  submitButton.style.display = "block";
  submitButton.style.marginTop = "10px";
  // Set margin of input elements to auto to center them horizontally
  smallInput.style.margin = "auto";
  bigInput.style.margin = "auto";
  submitButton.style.margin = "auto";
  smallInput.style.marginBottom = "10px";
  submitButton.style.marginTop = "10px";
  smallInput.name = "smallInput";
  bigInput.name = "bigInput";
  
  // create the form container and append the input elements and submit button
  const formContainer = document.createElement("div");
  formContainer.style.textAlign = "center";
  
  // create the form element and set its attributes
  const form = document.createElement("form");
  form.action = "/adminBlogpostcreation/newPost";
  form.method = "POST";

  // append the input elements and submit button to the form element
  form.appendChild(smallInput);
  form.appendChild(bigInput);
  form.appendChild(submitButton);

  // append the form element to the form container
  formContainer.appendChild(form);

  // send the HTML response to the client
  res.send(formContainer.outerHTML);
    }else{
        res.redirect('/adminBlogpostcreation/');
    }
});
router.post("/newPost", function(req, res) {
    if(req.session.loggedin = true){
        const smallInputValue = req.body.smallInput;
        const bigInputValue = req.body.bigInput;
        console.log("Small input value:", smallInputValue);
        console.log("Big input value:", bigInputValue);
        res.redirect("/adminBlogpostcreation/");
    }else{
        res.redirect('/adminBlogpostcreation/');
    }
});

router.post("/login", function(req, res) {
    const accounts = 0;
    account.getAll(function(err,dbResult){if(err){account = JSON.parse(err);}else{account = JSON.parse(dbResult);}})

    for (let i = 0; i < accounts.length; i++) {
        if (req.body.user = accounts.user){
            const password = 0;
            account.getById(i,function(err,dbResult){if(err){password = JSON.parse(err);}else{password = JSON.parse(json(dbResult));}})
            bcrypt.compare(req.body.password, password, function(err, finished){
                if(finished = true){
                    req.session.loggedin = true;
                    req.session.save();
                    res.redirect('/adminBlogpostcreation/addnew');
                }
            });
        }
    }
    res.redirect('/adminBlogpostcreation/')
});

module.exports=router;