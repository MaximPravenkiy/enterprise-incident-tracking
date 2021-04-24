import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Russo One', sans-serif;
    }
    
    .registration-form {
        min-width: 40%;
        
        @media (max-width: 1366px) {
            min-width: 35%;
        }
        
        @media (max-width: 1024px) {
            min-width: 45%;
        }

        @media (max-width: 768px) {
            min-width: 35%;
            max-width: 45%;
        }
        
        @media (max-height: 576px) {
            max-height: 90%;
            overflow: scroll;
        }

        @media (max-width: 480px) {
            min-width: 30%;
        }
    }
    
    .recover-password-form {
        min-width: 45%;
        min-height: 45%;

        @media (max-width: 1200px) {
            min-width: 50%;
        }
        
        @media (max-width: 1024px) {
            min-width: 55%;
        }
        
        @media (max-width: 768px) {
            max-width: 50%;
        }
    }
    
    .recover-password-form .ant-form-item .ant-form-item-label {

        @media (max-width: 480px) {
            height: 32px;
        }
    }
    
    .ant-form-item-explain,
    .ant-btn,
    .ant-form label,
    .ant-form a,
    .ant-picker-input > input {
        font-size: 16px;
        line-height: 16px;

        @media (max-width: 1366px) {
            font-size: 14px;
        }

        @media (max-width: 768px) {
            font-size: 13px;
        }

        @media (max-width: 480px) {
            font-size: 12px;
        }
    }

    .ant-form-item {
        margin-bottom: 30px;

        @media (max-width: 1366px) {
            margin-bottom: 26px;
        }
        
        @media (max-width: 768px) {
            margin-bottom: 8px;
        }
    }

    .ant-form-item-with-help {
        margin-bottom: 6px;

        @media (max-width: 1366px) {
            margin-bottom: 2px;
        }

        @media (max-width: 480px) {
            margin-bottom: -4px;
        }
    }

    .ant-input-affix-wrapper,
    .ant-form-item-control-input-content > .ant-input,
    .ant-form-item-control-input-content > .ant-picker {
        height: 4.7vmin;
        min-height: 28px;
    }
    
    .ant-input-affix-wrapper .anticon,
    .ant-picker,
    .ant-input,
    .ant-picker-input > input {
        font-size: 18px;
    
        @media (max-width: 1366px) {
            font-size: 15px;
        }
        
        @media (max-width: 1024px) {
            font-size: 14px;
        }
        
        @media (max-width: 768px) {
            font-size: 13px;
        }

        @media (max-width: 480px) {
            font-size: 12px;
        }
    }
    
    .ant-form-item .ant-form-item-label {
        line-height: 4.7vmin;
        
        @media (max-width: 768px) {
            height: 24px;
            padding: 0;
        }
    }
`;

export default GlobalStyles;
