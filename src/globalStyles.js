import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@300;400;500;700;900&display=swap');
@import url("https://use.typekit.net/bpd8gfy.css");
@import url("https://use.typekit.net/bpd8gfy.css");


body {
  -webkit-font-smoothing: antialiased; 
  -moz-osx-font-smoothing: grayscale;
  /* background-color: #D5E3B5;
  background-color: #f7d4ee;
  background-color: #eecddb;
  background-color: #EDECE8; */
  background-color: #EDECE8; 
  /* color: #00d544;
  color: #24292E;
  color: #B98B64;
  color: #ED82C6;
  color: #356E43; */
  color: #24292E;
  margin: 0;
  padding: 3em;
  font-family: 'Zen Kaku Gothic New', sans-serif;
  font-weight: 100;
  text-decoration: none;
  }

  .background-grey {
    background-color: #EDECE8;
}

.background-pink {
  background-color: #f393b9;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  list-style-type: none;
  position: relative;
}

a {
  text-decoration: none;
}

a:visited {
  color: #24292E;
  }

  a:active {
    color: #24292E;
}

@media(max-width: 900px) {
  body {
    padding: 2em;
  }
}
`