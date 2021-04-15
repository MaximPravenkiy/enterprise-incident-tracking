import React, { FC, useEffect } from 'react';
import {
    ExceptionOutlined,
    ScheduleFilled,
    ScheduleOutlined,
    SnippetsFilled
} from '@ant-design/icons/lib';
import { Avatar, Button } from 'antd';
import { MenuItemLoginProps } from 'components/Header/Menu/MenuItemLogin/interfaces';
import {
    ButtonWrapper,
    IncidentButton,
    RightSection,
    Title,
    Wrapper
} from 'components/Header/Menu/MenuItemLogin/style';

const MenuItemLogin: FC<MenuItemLoginProps> = ({
    fullname,
    onLogout,
    createIncident,
    actionWithIncidents,
    changeAction
}) => {
    useEffect(() => {
        const data = localStorage.getItem('actionWithIncidents');

        if (data === actionWithIncidents) {
            changeAction();
        }
    });

    return (
        <Wrapper>
            <ButtonWrapper>
                <IncidentButton
                    type="primary"
                    shape="round"
                    icon={<ScheduleOutlined />}
                    onClick={createIncident}
                >
                    Создать новый инцидент
                </IncidentButton>

                <IncidentButton
                    danger
                    ghost
                    icon={<ExceptionOutlined />}
                    onClick={changeAction}
                >
                    {actionWithIncidents}
                </IncidentButton>
            </ButtonWrapper>

            <div>
                <SnippetsFilled
                    style={{ fontSize: '3em', marginRight: '10px' }}
                />
                <Title>INCIDENT TRACKING</Title>
                <ScheduleFilled
                    style={{ fontSize: '3em', marginLeft: '10px' }}
                />
            </div>

            <RightSection>
                <div>
                    <Avatar size={50} gap={1}>
                        {fullname &&
                            fullname
                                .split(' ')
                                .map((item) => item[0].toUpperCase())}
                    </Avatar>
                </div>

                <Button danger ghost onClick={onLogout}>
                    Logout
                </Button>
            </RightSection>
        </Wrapper>
    );
};

export default MenuItemLogin;
