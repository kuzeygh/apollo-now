const { books, authors } = require('../store');

let bookId = 5;

const Mutation = {
  addBook: (_, { title, rating, authorId }) => {
    bookId++;

    const newBook = {
      id: bookId,
      title,
      rating,
      authorId
    };

    books.push(newBook);
    return newBook;
  }
};

module.exports = Mutation;
