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
}

interface DecodeAccessToken {
    fullname: string;
    userId: string;
    iat: number;
    exp: number;
}

export type {
    ValuesLoginForm,
    UserData,
    RestorePasswordFormValue,
    DecodeAccessToken,
    Token
};
