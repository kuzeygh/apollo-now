import styled from 'styled-components';

export const divLayout = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 50px 1fr 100px;
  grid-template-columns: 1fr;
  grid-template-areas:
    'header'
    'main'
    'footer';

  header {
    grid-area: header;
  }

  main {
    grid-area: main;
  }

  footer {
    grid-area: footer;
  }
`;

export const main = styled.main`
  padding: 20px;
`;
