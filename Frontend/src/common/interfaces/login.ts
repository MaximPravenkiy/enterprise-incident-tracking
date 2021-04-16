export interface ValuesLoginForm {
    login: string;
    password: string;
    remember: boolean;
}

export interface UserData {
    fullname: string;
    tokens: Token;
}

interface Token {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
}

export type KeysType = '0' | '1' | '2';
