import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }

`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;

  width: 100%;

  div {
    -webkit-animation: ${animation} 8s linear infinite;
    -moz-animation: ${animation} 8s linear infinite;
    -ms-animation: ${animation} 8s linear infinite;
    -o-animation: ${animation} 8s linear infinite;
    animation: ${animation} 8s linear infinite;
  }

  h1 {
    text-align: center;
  }
`;
