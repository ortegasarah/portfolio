import styled from "styled-components";

export const Container = styled.header `
    display: flex;
    padding: 2em 3em 0 3em;
    flex-direction: row;

    .header-about {
        font-weight: 700;  
        margin: 0;
        cursor: pointer;
  }
`

export const About = styled.div `
    visibility: hidden;
    height: 100vh;
    z-index: 2000;
    background-color: #f393b9 ;
    color: #fff;
    font-size: 2em;
    padding: 3em;
    position: fixed;
    top: 0;
    left: 0;
`
  
  export const H1 = styled.h1 `
    color: #f393b9;
    font-weight: 100;
    font-family: orpheuspro, serif;
    font-weight: 600;
    text-align: center;
    font-size: 3em;
    letter-spacing: 2px;
    margin: 0 auto;
  `
