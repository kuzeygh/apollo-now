import PropTypes from 'prop-types';
import * as Styled from './Header.style';

const Header = React.memo(props => (
  <Styled.header>
    <h1>Git Poll</h1>
    {props.children}
  </Styled.header>
));

Header.propTypes = {
  children: PropTypes.node.isRequired
};

export default Header;
