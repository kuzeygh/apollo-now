import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

export default withApollo(
  ({ ctx, headers, initialState }) => {
    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) {
        console.log(`[Network error]: ${networkError}`);
      }
    });

    const authLink = new ApolloLink((operation, forward) => {
      operation.setContext({
        headers
      });
      return forward(operation);
    });

    const httpLink = createHttpLink({
      uri: 'http://localhost:6969/graphql'
      // credentials: 'same-origin',
      // credentials: 'include',
    });

    return new ApolloClient({
      link: ApolloLink.from([errorLink, authLink, httpLink]),
      cache: new InMemoryCache().restore(initialState || {}),
      ssrMode: !process.browser,
      connectToDevTools: process.browser
    });
  },
  {
    getDataFromTree: 'ssr'
  }
);
