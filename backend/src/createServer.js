import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server-express';
// import { importSchema } from 'graphql-import';
// const path = require('path');
import { prisma } from '../prisma/generated/prisma-client';
// import resolvers from './resolvers';
// const typeDefs = importSchema(path.resolve('./src/schema/schema.graphql'));
// console.log('TCL: typeDefs', typeDefs);

// const schema = makeExecutableSchema({ typeDefs, resolvers });

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    password: String!
  }

  type Query {
    user(id: ID!): User
    users: [User]!
  }
`;

const resolvers = {
  Query: {
    user: (parent, args, ctx, info) => {
      return ctx.prisma.user({ id: args.id });
    },

    users: (parent, args, ctx, info) => {
      return ctx.prisma.users();
    }
  }
};

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
