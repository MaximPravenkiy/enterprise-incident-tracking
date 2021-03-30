import React from 'react';
import {ScheduleFilled, ScheduleOutlined, SnippetsFilled} from "@ant-design/icons/lib";
import {Avatar, Button,} from "antd";
import styled from "styled-components";
import {MenuItemLoginProps} from "../../../../../containers/MenuContainer";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const CreateNewIncBut = styled(Button)`
    display: flex;
    align-items: center;
    height: 40%;
`

const Title = styled.span`
    font-size: 3em;
    line-height: 3em;
`

const RightSection = styled.div`
    height: 100%;
    display: flex;
    width: 15%;
    align-items: center;
    justify-content: space-between;
`

const MenuItemLogin: React.FC<MenuItemLoginProps> = ({fullname, onLogout, createIncident}) => {
    return (
        <Wrapper>

            <CreateNewIncBut
                type="primary"
                shape="round"
                icon={<ScheduleOutlined/>}
                onClick={createIncident}
            >
                Создать новый инцидент
            </CreateNewIncBut>

            <div>
                <SnippetsFilled style={{fontSize: '3em',  marginRight: '10px'}}/>
                <Title>INCIDENT TRACKING</Title>
                <ScheduleFilled style={{fontSize: '3em', marginLeft: '10px'}}/>
            </div>

            <RightSection>
                <div>
                    <Avatar size={50} gap={1}>{fullname.split(' ')
                        .map((item) => item[0].toUpperCase())}
                    </Avatar>
                </div>

                <Button danger ghost onClick={onLogout}>Logout</Button>
            </RightSection>

        </Wrapper>
    );
}

export default MenuItemLogin;