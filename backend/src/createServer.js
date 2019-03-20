import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema/typeDefs';
import resolvers from './resolvers/Book';

export default () =>
  new ApolloServer({
    typeDefs,
    resolvers,
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
