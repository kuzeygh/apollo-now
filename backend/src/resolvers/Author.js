import { books, authors } from '../store';

const Author = {
  books: author => books.filter(book => book.authorId === author.id)
};

module.exports = Author;
