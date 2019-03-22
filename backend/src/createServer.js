import { ApolloServer } from 'apollo-server-express';
import { importSchema } from 'graphql-import';
import { prisma } from '../prisma/generated/prisma-client';
import resolvers from './resolvers';
const path = require('path');
const typeDefs = importSchema(path.normalize('./src/schema/schema.graphql'));
console.log('TCL: typeDefs', typeDefs);

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
