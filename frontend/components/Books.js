import { Query } from 'react-apollo';
import * as booksQL from '../lib/Queries/books';

class Books extends React.PureComponent {
  render() {
    return (
      <Query query={booksQL.BOOKS_QUERY}>
        {res => {
          return (
            <ul>
              {res.data.books.map(book => (
                <li key={book.id}>{book.title}</li>
              ))}
            </ul>
          );
        }}
      </Query>
    );
  }
}

export default Books;
