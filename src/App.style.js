import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: calc(10px + 1vmin);
    min-height: 100vh;
}

#root {
    width : min(80%, 1000px);
    margin-inline: auto;
}

`

export default GlobalStyle;
