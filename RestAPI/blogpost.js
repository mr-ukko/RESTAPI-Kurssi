const express = require('express');
const router = express.Router();
const blogPost = require('blogpost_model');

router.get('/',function(request,response){
    blogPost.getAll(function(err,dbResult){
        if(err){
            response.json(err);
        }
        else{
            response.json(dbResult);
        }
    })
});

router.get('/:id',
    function (request, response) {
        blogPost.getById(request.params.id, function (err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult[0]);
        }
        })
    });


router.post('/', 
    function(request, response) {
        blogPost.add(request.body, function(err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult.affectedRows);
        }
    });
});


router.delete('/:id', 
    function(request, response) {
        blogPost.delete(request.params.id, function(err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult.affectedRows);
        }
    });
});


router.put('/:id', 
    function(request, response) {
        blogPost.update(request.params.id, request.body, function(err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult.affectedRows);
        }
    });
});


module.exports=router;