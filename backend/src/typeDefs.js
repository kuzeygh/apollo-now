const { gql } = require('apollo-server');

const typeDefs = gql`
  type Author {
    id: Int!
    firstName: String!
    lastName: String!
    books: [Book]! # the list of books by this author
  }
  type Book {
    id: Int!
    title: String!
    rating: Int!
    author: Author!
  }
  # the schema allows the following query
  type Query {
    books: [Book!]!
    book(id: Int!): Book!
    author(id: Int!): Author!
  }
  # this schema allows the following mutation
  type Mutation {
    addBook(title: String!, rating: Int!, authorId: Int!): Book!
  }
`;

module.exports = typeDefs;
