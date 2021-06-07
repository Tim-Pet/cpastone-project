import { createGlobalStyle } from 'styled-components'
import './assets/fonts/Montserrat/Montserrat-Regular.ttf'
import './assets/fonts/Montserrat/Montserrat-Thin.ttf'

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),
  url("./assets/fonts/Montserrat/Montserrat-Regular.ttf") format("truetype");
}

:root {
  --color-accent: #007BF5;
  --color-accent-light: #007bf580;
  --color-background: linear-gradient(to right top, #ffffff, #fbfbfb, #f7f7f7, #f3f3f3, #efefef);
  --color-background-alt: #FFFFFF70;
  --color-text: #505254;
  --color-text-light: #50525470;
}

* {
  box-sizing: border-box;
}

body {
  color: var(--color-text);
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  margin: 0;
  padding: 0;
}
p, a {
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 26px;
  font-weight: 300;
}

h1 {
  font-size: 48px;
  font-weight: 600;
  letter-spacing: 5px;
  line-height: 64px;
  margin: 20px 0 0 10px;
}

h2 {
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 30;
}

a {
  color: var(--color-accent-light);
  text-decoration: none;
  letter-spacing: 1px;
}

input,
button,
textarea {
  font-size: inherit;
}
`
export default GlobalStyle