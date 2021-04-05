export interface IValuesLoginForm {
    login: string;
    password: string;
    remember?: boolean;
}

export interface IUserData {
    fullname: string;
    token: string;
    userId: string;
}

export type KeysType = '1' | '2';
