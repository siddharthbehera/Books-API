const express = require("express");
const { addNewBook, getBooks, bookDetail, updateBookDetail, deleteBook } = require("../controllers/bookControllers");

const router = express.Router()

router.route("/addBook").post(addNewBook);
router.route("/getbooks").get(getBooks);
router.get("/:bookId", bookDetail);
router.put("/updateBook", updateBookDetail);
router.delete("/deleteBook", deleteBook);

module.exports = router;