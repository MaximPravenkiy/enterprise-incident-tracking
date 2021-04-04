import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { Menu } from 'antd';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { MenuClickEventHandler } from '../../../../../node_modules/rc-menu/lib/interface';

interface MenuProps extends RouteComponentProps {
    menuItems: JSX.Element | JSX.Element[];
    keyDepsOnPath: string;
    changeKey: MenuClickEventHandler;
}

const MenuCustom = styled(Menu)`
    display: flex;
    justify-content: center;
    height: 100%;
`;

const NavMenu: FC<MenuProps> = ({
    menuItems,
    keyDepsOnPath,
    changeKey,
    history
}) => {
    useEffect(() => {
        if (keyDepsOnPath === '1') {
            history.push('/login');
        }
    }, [history, keyDepsOnPath]);

    return (
        <MenuCustom
            theme="dark"
            mode="horizontal"
            selectedKeys={[keyDepsOnPath]}
            onClick={changeKey}
        >
            {menuItems}
        </MenuCustom>
    );
};

export default withRouter(NavMenu);
