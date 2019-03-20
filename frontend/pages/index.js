import { Query } from 'react-apollo';
import * as booksQL from '../graphql/Queries/books';

class IndexPage extends React.Component {
  render() {
    return (
      <Query query={booksQL.BOOKS_QUERY}>
        {res => {
          console.log(' : ----------------------------------');
          console.log(' : IndexPage -> render -> res', res);
          console.log(' : ----------------------------------');

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

export default IndexPage;
