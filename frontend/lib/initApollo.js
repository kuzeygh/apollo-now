import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'isomorphic-unfetch';

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

const createClient = initialState => {
  const httpLink = createHttpLink({
    uri: 'http://localhost:6969/graphql',
    // credentials: 'same-origin'
    // credentials: 'include'
    // fetch
  });

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache().restore(initialState || {}),
    ssrMode: !process.browser,
    connectToDevTools: process.browser
  });
};

export default function initApollo(initialState) {
  if (!process.browser) {
    return createClient(initialState);
  }

  if (!apolloClient) {
    apolloClient = createClient(initialState);
  }

  return apolloClient;
}
