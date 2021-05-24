import styled from 'styled-components';
import { Button } from 'antd';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const IncidentButton = styled(Button)`
    display: flex;
    align-items: center;
    height: 30%;

    @media (max-width: 768px) {
        font-size: 11px;
        height: 50%;
    }

    @media (max-width: 768px) and (max-height: 1024px) and (min-height: 768px) {
        font-size: 14px;
        height: 30%;
    }

    @media (max-width: 576px) {
        font-size: 10px;
        height: 30%;
    }

    @media (max-width: 1024px) and (max-height: 576px) {
        font-size: 12px;
        height: 50%;
    }
`;

export const TittleWrapper = styled.div`
    font-size: 3.5em;
    line-height: 3em;

    @media (max-width: 1366px) {
        font-size: 2.8em;
    }

    @media (max-width: 1024px) {
        display: none;
    }
`;

export const RightSection = styled.div`
    display: flex;
    flex-basis: 15%;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1024px) {
        flex-basis: 25%;
        justify-content: space-evenly;
    }

    @media (max-width: 576px) {
        flex-basis: 45%;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-basis: 20%;

    @media (max-width: 1024px) {
        flex-direction: row;
        align-items: center;
        flex-basis: 75%;
    }

    @media (max-width: 576px) {
        flex-direction: column;
        flex-basis: 55%;
    }
`;
