// 320px, 576px, 768px, 1024px, 1280px || 1366 х 768
import styled from 'styled-components';

export const LoginFormWrapper = styled.div`
    .ant-form-item-explain,
    .ant-btn,
    .ant-form label,
    .ant-form a {
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

        @media (max-width: 480px) {
            margin-bottom: 20px;
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

    .ant-input-affix-wrapper {
        height: 4.7vmin;
        min-height: 28px;
    }
`;
