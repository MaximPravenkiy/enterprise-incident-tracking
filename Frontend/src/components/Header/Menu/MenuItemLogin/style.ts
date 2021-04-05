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
`;

export const Title = styled.span`
    font-size: 3em;
    line-height: 3em;
`;

export const RightSection = styled.div`
    height: 100%;
    display: flex;
    width: 15%;
    align-items: center;
    justify-content: space-between;
`;

export const ButtonWrarpper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
`;
