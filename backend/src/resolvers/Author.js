const { books, authors } = require('../store');

const Author = {
  books: author => books.filter(book => book.authorId === author.id)
};

module.exports = Author;
