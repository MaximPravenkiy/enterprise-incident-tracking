import React from 'react';
import MenuItemLogout from './MenuItemLogout/MenuItemLogout';

const navContent = [
    { text: 'Login', url: '/login' },
    { text: 'Registration', url: '/registration' }
];
const MenuItemsLogout = navContent.map((content) => (
    <MenuItemLogout key={content.url} url={content.url} text={content.text} />
));

export default MenuItemsLogout;
