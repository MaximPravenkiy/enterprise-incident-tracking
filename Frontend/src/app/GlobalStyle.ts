import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Russo One', sans-serif;
    }
    
    &.registration-form {
        min-width: 30%;
    }
    
    &.recover-password-form {
        min-width: 50%;
        min-height: 45%;
    }
`;

export default GlobalStyles;
