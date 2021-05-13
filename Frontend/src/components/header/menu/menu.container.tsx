import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { RootReducer } from 'redux/reducers/root.reducer';
import NavMenu from './menu.component';

const MenuContainer = memo(() => {
    const { isAuth } = useSelector(
        ({ userInfoReducer }: RootReducer) => userInfoReducer
    );

    return <NavMenu isAuth={isAuth} />;
});

export default MenuContainer;
