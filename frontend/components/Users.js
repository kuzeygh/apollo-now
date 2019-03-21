import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

export const USERS_QUERY = gql`
  query USERS_QUERY {
    Users {
      id
      email
    }
  }
`;

const Users = React.memo(() => (
  <Query query={USERS_QUERY}>
    {({ data, error, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error.message}</p>;
      return (
        <ul>
          {data.users.map(user => (
            <li key={user.id}>{user.email}</li>
          ))}
        </ul>
      );
    }}
  </Query>
));

export default Users;
