import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

export const BOOKS_QUERY = gql`
  query BOOKS_QUERY {
    books {
      id
      title
    }
  }
`;

const Books = React.memo(() => (
  <Query query={BOOKS_QUERY}>
    {({ data, error, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error.message}</p>;
      return (
        <ul>
          {data.books.map(book => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      );
    }}
  </Query>
));

export default Books;
