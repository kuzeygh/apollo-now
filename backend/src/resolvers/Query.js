const { books, authors } = require('../store');

const Query = {
  books: () => books,
  book: (_, { id }) => books.find(book => book.id === id),
  author: (_, { id }) => authors.find(author => author.id === id)
};

module.exports = Query;
