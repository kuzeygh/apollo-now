import { gql } from 'apollo-server-express';

export default gql`
  type Book {
    id: Int!
    title: String!
  }

  type Query {
    books: [Book!]!
  }

  type Mutation {
    addBook(title: String!): Book!
  }
`;
