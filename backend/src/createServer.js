import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server-express';
// import { importSchema } from 'graphql-import';
// const path = require('path');
import { prisma } from '../prisma/generated/prisma-client';
// import resolvers from './resolvers';
// const typeDefs = importSchema(path.resolve('./src/schema/schema.graphql'));
// console.log('TCL: typeDefs', typeDefs);

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    password: String!
  }

  type Query {
    users: [User]!
  }
`;

const resolvers = {
  Query: {
    users: (parent, args, ctx, info) => {
      return ctx.prisma.users();
      // return [
      //   { id: '1', email: 'email1@email.com', password: 'pass1' },
      //   { id: '2', email: 'email2@email.com', password: 'pass2' }
      // ];
    }
  }
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default () =>
  new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => {
      return { req, res, prisma };
    },
    tracing: true,
    introspection: true,
    playground: true
      ? {
          settings: {
            'editor.theme': 'light',
            'request.credentials': 'include'
          }
        }
      : false
  });
