const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');

const path = require('path');
const typeDefs = importSchema(path.resolve('src/schema.graphql'));

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

server.listen({ port: 6969 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
