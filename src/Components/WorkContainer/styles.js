import styled from "styled-components";

export const Container = styled.section `
    display: flex;
    flex-direction: row;
    padding: 1% 3%;
    flex-direction: column;
    z-index: 0;

    ul  li  img {
    visibility: hidden;
    position: fixed;
    top: 15%;
    display: inline-block;
    margin: 0 auto;
    
    left: 50%;
    top: 50%;
    -webkit-transform: translateY(-50%) translateX(-50%);
    max-width: 420px;
    pointer-events: none;
    word-break: break-all;
    
    z-index: 100;
    opacity: 0;

    transition: opacity 1s ease-in-out;
    -moz-transition: opacity 1s ease-in-out;
    -webkit-transition: opacity 1s ease-in-out;
    }

    li:hover  img{
    visibility: visible;

    margin: 0;
    padding: 0;
    transition: opacity 2s;
    opacity: 1.0;
    transition: opacity .55s ease-in-out;
    -moz-transition: opacity .55s ease-in-out;
    -webkit-transition: opacity .55s ease-in-out;
    z-index: 100;
    }

    ul:hover  li span {
    opacity: 0.2;
    transition: opacity 0.8s;
    z-index: -8000;

    }

    ul li:hover span {
    opacity: 1;
    z-index: 3000;
}
`

export const H2 = styled.h2 `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    transition: color 0.5s;
    font-size: 2.7em;
    text-decoration: none;
    justify-content: center;
    margin: 0.5em;

    a {
    text-decoration: none;
    color: #24292E;
    }

    .description {
    font-family: orpheuspro, serif;
    font-style: italic;
    font-weight: 200;
}
`

export const NumberList = styled.span `
    font-family: orpheuspro, serif;
    font-size: 13px;
    font-weight: 100px;
    padding-right: 14px;
    color: #f393b9;
`