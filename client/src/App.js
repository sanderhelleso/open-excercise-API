import React, { Fragment } from 'react';
import Router from './components/routes/Router';
import { createGlobalStyle } from 'styled-components';

const App = () => (
	<Fragment>
		<GlobalStyle />
		<Router />
	</Fragment>
);

export default App;

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Oswald:300,400,700&display=swap');


    body {
        margin: 0;
        padding: 0;
        overflow: hidden;
        font-family: 'Oswald', sans-serif;

    }

    h1, h2, h3, h4, h5 {
        margin: 0;
        padding: 0;
        margin-bottom: 1rem;
        color: #444444;
        font-family: 'Oswald', sans-serif;
    }

    p, button, a, span, input {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
    }

    p {
        color: #9e9e9e;
        font-size: 14px;
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
