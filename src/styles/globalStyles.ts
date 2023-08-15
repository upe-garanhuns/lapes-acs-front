import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    background-color: #fff;

  }

  main {
    margin: 0 auto;
    max-width: 100vw;
    min-height: 80vh;
  }

  footer {
    height: 15vh;
    width: 100vw;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  input, textarea {
    border: none;
    outline: none;
  }

  p {
    margin:0px;
  }
`;
