import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'isomorphic-unfetch';
// import { devGraphQLEndpoint } from '../config';

let apolloClient = null;

if (!process.browser) {
  global.fetch = fetch;
}

const createClient = initialState => {
  const httpLink = createHttpLink({
    uri: '/graphql'
    // credentials: 'include',
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

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = createClient(initialState);
  }

  return apolloClient;
}

// import { ApolloClient } from 'apollo-client';
// import { createHttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import fetch from 'isomorphic-unfetch';
// import { devGraphQLEndpoint, prodGraphQLEndpoint } from '../config';

// let apolloClient = null;

// const createClient = initialState => {
//   const httpLink = createHttpLink({
//     uri: devGraphQLEndpoint,
//     credentials: 'include',
//     fetch
//   });

//   return new ApolloClient({
//     link: httpLink,
//     cache: new InMemoryCache().restore(initialState || {}),
//     ssrMode: !process.browser,
//     ssrForceFetchDelay: 100,
//     connectToDevTools: process.browser
//   });
// };

// export default function initApollo(initialState) {
//   // Make sure to create a new client for every server-side request so that data
//   // isn't shared between connections (which would be bad)
//   if (!process.browser) {
//     return createClient(initialState);
//   }

//   // Reuse client on the client-side
//   if (!apolloClient) {
//     apolloClient = createClient(initialState);
//   }

//   return apolloClient;
// }
