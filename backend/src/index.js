const { ApolloServer } = require('apollo-server');
import { typeDefs } from './typeDefs';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import Author from './resolvers/Author';
import Book from './resolvers/Book';

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Author,
    Book
  },
  introspection: true,
  playground: true
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
