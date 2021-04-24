import styled from 'styled-components';
import { Menu } from 'antd';

// 320px, 576px, 768px, 1024px, 1280px || 1366 х 768
export const MenuItemCustom = styled(Menu.Item)`
    && {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-basis: 35%;
        text-transform: uppercase;
        font-size: 40px;

        @media (max-width: 1366px) {
            font-size: 30px;
            flex-basis: 30%;
        }

        @media (max-width: 1024px) {
            flex-basis: 50%;
        }

        @media (max-width: 768px) {
            font-size: 25px;
        }

        @media (max-width: 576px) {
            font-size: 20px;
        }

        @media (max-width: 480px) {
            font-size: 16px;
        }
    }
`;
