interface ValuesLoginForm {
    login: string;
    password: string;
    remember: boolean;
}

interface UserData {
    fullname: string;
    tokens: Token;
}

interface RestorePasswordFormValue {
    login: string;
    password: string;
    confirmPassword: string;
}

interface Token {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
}

interface DecodeAccessToken {
    fullname: string;
    userId: string;
    iat: number;
    exp: number;
}

type KeysType = '0' | '1' | '2';

export type {
    ValuesLoginForm,
    UserData,
    RestorePasswordFormValue,
    KeysType,
    DecodeAccessToken
};
