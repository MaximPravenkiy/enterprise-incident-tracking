import React from 'react';
import {
    ScheduleFilled,
    ScheduleOutlined,
    SnippetsFilled
} from '@ant-design/icons/lib';
import { Avatar, Button } from 'antd';
import styled from 'styled-components';

export type MenuItemLoginProps = {
    fullname: string;
    onLogout: () => void;
    createIncident: () => void;
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const IncidentButton = styled(Button)`
    display: flex;
    align-items: center;
    height: 30%;
`;

const Title = styled.span`
    font-size: 3em;
    line-height: 3em;
`;

const RightSection = styled.div`
    height: 100%;
    display: flex;
    width: 15%;
    align-items: center;
    justify-content: space-between;
`;

const ButtonWrarpper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
`;

const MenuItemLogin: React.FC<MenuItemLoginProps> = ({
    fullname,
    onLogout,
    createIncident
}) => (
    <Wrapper>
        <ButtonWrarpper>
            <IncidentButton
                type="primary"
                shape="round"
                icon={<ScheduleOutlined />}
                onClick={createIncident}
            >
                Создать новый инцидент
            </IncidentButton>

            <IncidentButton
                type="primary"
                ghost
                icon={<ScheduleOutlined />}
                onClick={createIncident}
            >
                Показать все инциденты
            </IncidentButton>
        </ButtonWrarpper>

        <div>
            <SnippetsFilled style={{ fontSize: '3em', marginRight: '10px' }} />
            <Title>INCIDENT TRACKING</Title>
            <ScheduleFilled style={{ fontSize: '3em', marginLeft: '10px' }} />
        </div>

        <RightSection>
            <div>
                <Avatar size={50} gap={1}>
                    {fullname.split(' ').map((item) => item[0].toUpperCase())}
                </Avatar>
            </div>

            <Button danger ghost onClick={onLogout}>
                Logout
            </Button>
        </RightSection>
    </Wrapper>
);

export default MenuItemLogin;
