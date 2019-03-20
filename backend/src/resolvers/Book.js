import books from '../db/books';

let bookId = 5;

export default {
  Query: {
    books: () => books
  },

  Mutation: {
    addBook: (parent, { title }) => {
      bookId++;

      const newBook = {
        id: bookId,
        title
      };

      books.push(newBook);
      return newBook;
    }
  }
};
