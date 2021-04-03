import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Russo One', sans-serif;
    }
    
    &.registration-form {
        min-width: 30%;
    }
`;

export default GlobalStyles;
