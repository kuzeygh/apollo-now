import styled from 'styled-components';

export const header = styled.header`
  display: grid;
  /* place-content: center; */
  grid-template: 1fr / 1fr 1fr;
  h1 {
    /* text-align: center; */
    place-self: center;
    margin: 0;
    color: ${props => props.theme.red};
  }
`;
