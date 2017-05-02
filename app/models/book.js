// Dependencies
// =============================================================

var Sequelize = require("sequelize");
var seq = require('../config/connection.js');

// Create a "Book" model with the following configuration

var book = seq.define('book',{
  title: Sequelize.STRING,
  author: Sequelize.STRING,
  genre: Sequelize.STRING,
  page: Sequelize.INTEGER
});

book.sync().then(resp =>{
  console.log("Success!");
});

module.exports = book;
// Export the book model for other files to use
