import React, { FC, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { MenuCustom } from 'components/Header/Menu/style';
import { MenuProps } from 'components/Header/Menu/interfaces';

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
