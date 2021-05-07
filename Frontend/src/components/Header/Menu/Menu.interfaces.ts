import { RouteComponentProps } from 'react-router-dom';

export interface MenuProps extends RouteComponentProps {
    menuItems: JSX.Element | JSX.Element[];
}
