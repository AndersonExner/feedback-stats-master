import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100vw !important;
        height: 100vh;
        overflow-x: hidden !important;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
    } 

    body::-webkit-scrollbar {
        width: 1rem;
        height: 1rem;
        background-color: #707070;
    }

    body::-webkit-scrollbar-thumb {
        background: #b3b3b3;
        border-radius: 0.5px;
    }
`;

export default GlobalStyle;
