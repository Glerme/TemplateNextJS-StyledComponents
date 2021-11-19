import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    
    @media screen and (min-width: 320px) {
      html {
        font-size: calc(16px + 6 * ((100vw - 320px) / 680));
      }
    }
    
    @media screen and (min-width: 1000px) {
      html {
        font-size: 22px;
      }
    }
  }


  body {
    background: ${props => props.theme.background};
    -webkit-font-smoothing: antialiased;
    font-family: sans-serif;
  }

  body, input, textarea, button {
    font-weight: 500;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  a{
    text-decoration: none;
    
    &:visited{
    color: inherit;
    }
  }


 
`;

export default GlobalStyles;
