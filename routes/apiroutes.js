const axios = require("axios");
const router = require("express").Router();
const booksController = require("../controllers/booksController");

// Retrieves book information from Google Books API
router.get('/books/:name', async (req, res) => {
  axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.name}`)
    .then(({ data }) => res.json(data))
    .catch(err => res.status(422).json(err))
})

// Matches with "/api/books"
router.route("/books/")
  .get(booksController.search)
  .post(booksController.create);

// Matches with "/api/saved/:id"
router
  .route("/saved/:id")
  .get(booksController.search)
  .put(booksController.update)
  .delete(booksController.delete)
  .post(booksController.create);

module.exports = router;