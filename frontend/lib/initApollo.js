// import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
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
    credentials: 'include'
    // fetch
  });

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache().restore(initialState || {}),
    ssrMode: !process.browser,
    connectToDevTools: process.browser
  });
};

// function createClient(initialState) {
//   return new ApolloClient({
//     connectToDevTools: process.browser,
//     ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
//     link: new HttpLink({
//       uri: 'http://localhost:6969/graphql', // Server URL (must be absolute)
//       credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
//     }),
//     cache: new InMemoryCache().restore(initialState || {})
//   });
// }

export default function initApollo(initialState) {
  if (!process.browser) {
    return createClient(initialState);
  }

  if (!apolloClient) {
    apolloClient = createClient(initialState);
  }

  return apolloClient;
}
