const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Author = require('./resolvers/Author');
const Book = require('./resolvers/Book');

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
