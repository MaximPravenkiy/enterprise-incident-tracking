import { MenuClickEventHandler } from '../../../../node_modules/rc-menu/lib/interface';

export interface MenuProps {
    menuItems: JSX.Element | JSX.Element[];
    keyDepsOnPath: string;
    changeKey: MenuClickEventHandler;
}
