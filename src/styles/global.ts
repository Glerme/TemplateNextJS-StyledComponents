import facepaint from 'facepaint';
import { createGlobalStyle } from 'styled-components';

import theme from './theme';

const mq = facepaint(theme.breakpoints);

const GlobalStyles = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    ${mq({ 'font-size': ['87.5%', '93.75%', '100%'] })}
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

  div {
    display: flex;
  }
 
`;

export default GlobalStyles;
