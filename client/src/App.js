import React, { Fragment } from "react";
import Router from "./components/routes/Router";
import { createGlobalStyle } from "styled-components";

const App = () => (
    <Fragment>
        <GlobalStyle />
        <Router />
    </Fragment>
);

export default App;

const GlobalStyle = createGlobalStyle`

    body {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        overflow: hidden;
    }

    h1, h2, h3, h4, h5 {
        color: #444444;
    }

    p {
        color: #9e9e9e;
    }
    
    #root {
        height: 100%;
        display: flex;
    }

    .column {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
    }
`;
