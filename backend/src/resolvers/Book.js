import jwt from 'jsonwebtoken';
import books from '../db/books';

let bookId = 5;

export default {
  Query: {
    books: () => books
  },

  Mutation: {
    addBook: (parent, args, ctx, info) => {
      bookId++;

      const newBook = {
        id: bookId,
        title: args.title
      };

      books.push(newBook);

      const JWT = jwt.sign({ bookId: newBook.id }, process.env.JWT_SECRET, {
        expiresIn: '7d'
      });
      console.log(' : -----------');
      console.log(' : JWT', JWT);
      console.log(' : -----------');

      ctx.res.cookie('token', JWT, {
        httpOnly: true,
        // secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
      });

      return newBook;
    }
  }
};
