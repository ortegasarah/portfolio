import styled from "styled-components";

export const Container = styled.footer `
    padding-top: 3em;
    
    ul {
    list-style-type: none;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin: 0;

    @media (max-width: 544px) {
    justify-content: space-between;
    font-size: 3vw;
    width: max-content;
        }
    }

    p {
        margin: 0;
    }

    li, li a {
        color: #24292E;
        list-style-type: none;
        text-decoration: none;
        font-weight: 700;
        margin: 0 10px;
    }

    @media (max-width: 544px) {
        padding-top: 0em;

        }
`