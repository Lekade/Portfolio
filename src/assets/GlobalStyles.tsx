import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body{
    width:100%;
    height:100%;
    background: #3C3C3C;
    font-family: Poppins, sans-serif;
    color: #E4E4E4;
  }

  *,
  :before,
  :after{
    box-sizing:border-box;
    margin:0;
    padding:0;
  }

  a, a:link, a:visited, a:hover  {
    text-decoration: none;
  }

  ul, ul li {
    list-style: none;
  }

  html{
    height: 100%;
    font-size: calc(100vw/1920*10);
  }
  
  .app{
    min-height:100vh;
    position: relative;
    width:100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
`