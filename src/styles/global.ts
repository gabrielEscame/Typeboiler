import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'M PLUS Rounded 1c', sans-serif;
    background: ${({theme}) =>  theme.colors.red.main};
    color: ${({theme}) => theme.colors.vanilla.main};
  }
`
