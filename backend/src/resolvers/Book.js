const { books, authors } = require('../store');

const Book = {
  author: book => authors.find(author => author.id === book.authorId)
};

module.exports = Book;
