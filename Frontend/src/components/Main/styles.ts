import styled from 'styled-components';
import { Layout } from 'antd';

export const Content = styled(Layout.Content)`
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;

    @media (max-width: 1366px) {
        padding: 7px 0;
    }
`;
