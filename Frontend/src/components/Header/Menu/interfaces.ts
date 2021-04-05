import { RouteComponentProps } from 'react-router-dom';
import { MenuClickEventHandler } from '../../../../node_modules/rc-menu/lib/interface';

export interface MenuProps extends RouteComponentProps {
    menuItems: JSX.Element | JSX.Element[];
    keyDepsOnPath: string;
    changeKey: MenuClickEventHandler;
}