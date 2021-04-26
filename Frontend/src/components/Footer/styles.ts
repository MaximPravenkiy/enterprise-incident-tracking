import styled from 'styled-components';
import { Layout } from 'antd';

export const FooterCustom = styled(Layout.Footer)`
    height: 15vh;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #a9a9a9;

    @media (max-width: 1024px) {
        display: none;
    }
`;

export const StyleSpan = styled.span`
    font-size: 35px;
    text-transform: uppercase;
    margin: 0 10px;

    @media (max-width: 1366px) {
        font-size: 32px;
    }
`;
