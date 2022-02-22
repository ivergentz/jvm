import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    overflow-y: hidden;
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
    color: black;
    background: #fff;
`

export default GlobalStyle
