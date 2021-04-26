import styled from 'styled-components';
import { Layout } from 'antd';

export const Content = styled(Layout.Content)`
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
        height: 85vh;
    }
`;
