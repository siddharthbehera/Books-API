const asyncHandler = require("express-async-handler");
const Book = require("../Models/bookModel");

const addNewBook = asyncHandler(async (req, res) => {
    const {bookTitle, summary, auther} = req.body;

    if (!bookTitle || !summary || !auther) {
        res.status(400);
        throw new Error("Please Enter all the Fields");
    }

    const bookExists = await Book.findOne({bookTitle});

        if (bookExists) {
            res.status(400);
            throw new Error("Book already exists");
        }

        const book = await Book.create({
            bookTitle,
            summary,
            auther,
        });

        if (book) {
            res.status(201).json({
                _id: book._id,
                bookTitle: book.bookTitle,
                summary: book.summary,
                auther: book.auther,
            });
        } else{
            res.status(400);
            throw new Error("Book Failed to Register");
        }
});

const getBooks = asyncHandler( async(req, res) =>{
    try{
        const books = await Book.find();
        res.send(books);
    } catch(error) {
        res.status(400);
        throw new Error(error.message);
      }
}
)

const bookDetail = asyncHandler(async (req, res) => {
    try{
        const summary = await Book.findById(req.params.bookId);
        res.status(201).json(summary.summary);
    } catch (error){
        res.status(404);
        throw new Error(error.message);
    }
    // const {bookId} = req.body;

    // if (!bookId) {
    //     return res.sendStatus(400).send({message: "Params not send"});
    // }
    // try{
    //     var booksummary = await Book.findById(bookId);
    //     res.send(booksummary.summary);
    // } catch(error) {
    //     res.status(400);
    //    // res.send("Book not Found");
    //     throw new Error("book not found");
    //   }
}
)

const updateBookDetail = asyncHandler(async(req, res) => {
    const { bookId, newSummary } = req.body;

    if (!bookId || !newSummary) {
      res.status(400);
      throw new Error("Please Enter all the Fields");
  }

  const updatedBook = await Book.findByIdAndUpdate(
    bookId,
    {
      summary: newSummary,
    },
    {
      new: true,
    }
  )
  if (!updatedBook) {
    res.status(404);
    throw new Error("Book Not Found");
  } else {
    res.status(200).json(updatedBook);
  }
});

const deleteBook = asyncHandler(async(req, res) => {
    const { bookId } = req.body;

  const removed = await Book.findByIdAndDelete(bookId);
  if (!removed) {
    res.status(404);
    throw new Error("Book Not Found");
  } else {
    res.status(204).json({message: "Book deleted successfully"});
  }
}
)


module.exports = {addNewBook, getBooks, bookDetail, updateBookDetail, deleteBook};