import axios from "axios";

export default {
    // Get all books from Google Books API based upon search parameters
    getBooks: function(query) {
        return axios.get(`/api/books/${query}`)
    },
    // Get all saved books from the database 
    getBook: function(id) {
        return axios.get("/api/saved/" + id);
    },
    // Saves a book to the database
    createBook: function(bookData) {
        console.log(bookData);
        return axios.post("/api/books", bookData);
    },
    // Delete a book from the database
    deleteBook: function(id) {
        return axios.delete("/api/saved/" + id);
    }
};