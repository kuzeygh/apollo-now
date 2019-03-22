import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server-express';
import { importSchema } from 'graphql-import';
const path = require('path');
import { prisma } from '../prisma/generated/prisma-client';
import resolvers from './resolvers';
const typeDefs = importSchema(path.resolve('./src/schema/schema.graphql'));
// console.log('TCL: typeDefs', typeDefs);

// const gqlTypeDefs = gql`
//   ${typeDefs}
// `;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default () =>
  new ApolloServer({
    schema,
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
