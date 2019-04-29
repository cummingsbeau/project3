import axios from "axios";

export default {
  // Gets all books
  getSimilar: function() {
    return axios.get("/api/saved");
  },
  // Deletes the book with the given id
  deleteSimilar: function(name) {
    return axios.delete("/api/saved/" + name);
  },
  // Saves a book to the database
  saveSimilar: function(Result) {
    return axios.post("/api/saved", Result);
  }
};