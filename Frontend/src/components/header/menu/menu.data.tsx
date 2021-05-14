import React from 'react';
import MenuItemLogout from './menu-item-logout/menu-item-logout.component';

const navContent = [
    { text: 'login', url: '/login' },
    { text: 'registration', url: '/registration' }
];
const MenuItemsLogout = navContent.map((content) => (
    <MenuItemLogout key={content.url} url={content.url} text={content.text} />
));

export default MenuItemsLogout;
