const express = require('express');
const router = express.Router();
const joi =require('joi')

module.exports = router ;
 /* data */
var books = [{
 id : 1 ,
 name : "books 1 " ,
 description : "description book 1" ,
 imageUrl : "http://www.google.com/img1" ,
 author : {
     firstName : "firstname1",
     lastName :"lastname1" ,
     nbBooks : 10 ,
 } ,
 sources : ["source 1 ","source 2 " ,"source 3"]
} ,
{
    id : 2 ,
    name : "books 2 " ,
    description : "description book 2" ,
    imageUrl : "http://www.google.com/img 2" ,
    author : {
        firstName : "firstname 2",
        lastName :"lastname 2" ,
        nbBooks : 60 ,
    } ,
    sources : ["source 1 ","source 2 " ,"source 3"]
   }
]

router.get('/', (req, res) => { // préfixe => index 
    res.status(200)
    res.json(books)
  });
  

