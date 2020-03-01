const express = require('express');
const router = express.Router();
const joi =require('joi')

module.exports = router ;

const bookValidation = {
    id : joi.number().required(),
    name: joi.string().min(3).required(),
    description: joi.string(),
    imageUrl : joi.string().uri().required(),
    author : {
        firstName: joi.string().min(3).required(),
        lastName:joi.string().min(3).required()
    },
    nbBooks: joi.number().positive(),
    source : joi.array()   
}

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
  
router.get('/:id' , (req,res) => {
  let book = books.find(b=>{ //apres => body de la function 
    return b.id === parseInt(req.params.id)
  })
  if(!book){
      return res.status(404).json({
          message : `books with {req.params.id} not found`
      })
  }
  return res.status(200).json(book)
})

router.post('/',(req,res)=>{

    let book = [{
        id : books.length + 1,
        name : req.body.name ,
        description : req.body.description,
        imageUrl : req.body.imageUrl ,
        author : req.body.author,  
        souces : req.body.sources
       }
    ]
    const result_validation = joi.validate(book, bookValidation);
    if (result_validation.error)
     return res.status(400).json({message: result_validation.error.details[0].message});


   books.push(book);
   res.statusMessage = "new book created successfully";
   res.status(201).json(book);

})