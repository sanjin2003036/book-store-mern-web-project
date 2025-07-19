const express = require('express');
const Book = require('./book.model');
const { postABook, getAllBooks, getSingleBook, UpdateBook, deleteABook } = require('./book.controller');
const router = express.Router();

//frontend(request) =>backend server=>controller=>book schema routes=>database=>send data to the server => back to the frontend
//post= when submit something frontend to db
//get=when get something back from db
//put/patch=when edit or update something
//delete=when delete something


//post a book

router.post("/create-book",postABook);


//get all books
router.get("/",getAllBooks);

//single book endpoint
router.get("/:id",getSingleBook);

//update a book endpoint

router.put("/edit/:id",UpdateBook);

//delete
router.delete("/:id",deleteABook)









module.exports = router;