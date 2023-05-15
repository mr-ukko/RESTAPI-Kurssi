const express = require("express");
const app = express();
const http = require('http');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const bodyParser = require("body-parser");

const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
const document = dom.window.document;

app.use(bodyParser.urlencoded({ extended: true })); 

app.get("/", function(req, res) {
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
  form.action = "/";
  form.method = "POST";

  // append the input elements and submit button to the form element
  form.appendChild(smallInput);
  form.appendChild(bigInput);
  form.appendChild(submitButton);

  // append the form element to the form container
  formContainer.appendChild(form);

  // send the HTML response to the client
  res.send(formContainer.outerHTML);
});

app.post("/", function(req, res) {
  const smallInputValue = req.body.smallInput;
  const bigInputValue = req.body.bigInput;
  console.log("Small input value:", smallInputValue);
  console.log("Big input value:", bigInputValue);
  res.redirect("/");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
