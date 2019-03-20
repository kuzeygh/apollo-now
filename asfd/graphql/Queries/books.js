import gql from 'graphql-tag';

export const BOOKS_QUERY = gql`
  query BOOKS_QUERY {
    books {
      id
      title
    }
  }
`;

export const ADD_BOOK_MUTATION = gql`
  mutation ADD_BOOK_MUTATION($title: String!) {
    addBook(title: $title) {
      id
      title
    }
  }
`;
