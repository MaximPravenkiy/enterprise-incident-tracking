import React, { FC, memo, useEffect } from 'react';
import {
    ExceptionOutlined,
    ScheduleFilled,
    ScheduleOutlined,
    SnippetsFilled
} from '@ant-design/icons/lib';
import { Avatar, Button } from 'antd';
import { ButtonLabel } from 'common/types/incidents';
import { MenuItemLoginProps } from './MenuItemsLogin.interfaces';
import {
    ButtonWrapper,
    IncidentButton,
    RightSection,
    TittleWrapper,
    Wrapper
} from './MenuItemsLogin.styles';

const MenuItemsLogin: FC<MenuItemLoginProps> = memo(
    ({
        isOwnIncidents,
        fullname,
        logout,
        createIncident,
        changeTheShowingOfIncidents
    }) => {
        useEffect(() => {
            localStorage.setItem('isOwnIncidents', JSON.stringify(true));
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        return (
            <Wrapper>
                <ButtonWrapper>
                    <IncidentButton
                        type="primary"
                        shape="round"
                        icon={<ScheduleOutlined />}
                        onClick={createIncident}
                    >
                        Create new incident
                    </IncidentButton>

                    <IncidentButton
                        danger
                        ghost
                        icon={<ExceptionOutlined />}
                        onClick={changeTheShowingOfIncidents}
                    >
                        {isOwnIncidents
                            ? ButtonLabel.ShowAllIncidents
                            : ButtonLabel.ShowOwnIncidents}
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
                            {fullname
                                ?.split(' ')
                                .map((item) => item[0].toUpperCase())}
                        </Avatar>
                    </div>

                    <Button danger ghost onClick={logout}>
                        Logout
                    </Button>
                </RightSection>
            </Wrapper>
        );
    }
);

export default MenuItemsLogin;
