import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    h1 {
        font-size: 3rem;
        margin-block-start: 0;
        margin-block-end: 0;
    }
    hr {
        border: 1px solid #dfe1e3;
    }

    p {
    }

    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
