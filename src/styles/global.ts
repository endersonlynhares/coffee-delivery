import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;        
    }

    :root{
        font-size: 62.5%;
    }

    body{
        background-color: ${props => props.theme.colors.background};
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
    }
    
    input, textarea, button{
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
        all: unset;
    }
`