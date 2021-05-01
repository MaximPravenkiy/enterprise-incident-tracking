import React, { FC, memo, useEffect } from 'react';
import {
    ExceptionOutlined,
    ScheduleFilled,
    ScheduleOutlined,
    SnippetsFilled
} from '@ant-design/icons/lib';
import { Avatar, Button } from 'antd';
import { MenuItemLoginProps } from 'components/Header/Menu/MenuItemsLogin/MenuItemsLogin.interfaces';
import {
    ButtonWrapper,
    IncidentButton,
    RightSection,
    TittleWrapper,
    Wrapper
} from 'components/Header/Menu/MenuItemsLogin/MenuItemsLogin.styles';

const MenuItemsLogin: FC<MenuItemLoginProps> = memo(
    ({
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

                <TittleWrapper>
                    <SnippetsFilled style={{ marginRight: '10px' }} />
                    <span>INCIDENT TRACKING</span>
                    <ScheduleFilled style={{ marginLeft: '10px' }} />
                </TittleWrapper>

                <RightSection>
                    <div>
                        <Avatar size={45} gap={1}>
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
    }
);

export default MenuItemsLogin;
