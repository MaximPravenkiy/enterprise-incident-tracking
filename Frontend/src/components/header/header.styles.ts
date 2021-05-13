import styled from 'styled-components';
import { Layout } from 'antd';

export const HeaderCustom = styled(Layout.Header)`
    height: 15vh;

    @media (max-width: 1024px) {
        padding: 0;
    }
`;
