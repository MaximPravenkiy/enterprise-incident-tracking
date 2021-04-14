module.exports = {
    mongoUri: process.env.MONGO_URI,
    jwt: {
        secret: process.env.JWT_SECRET,
        tokens: {
            access: {
                type: process.env.JWT_TOKEN_ACCESS_TYPE,
                expiresIn: process.env.JWT_TOKEN_ACCESS_EXPIRES_IN_NOT_REMEMBER
            },
            refresh: {
                type: process.env.JWT_TOKEN_REFRESH_TYPE,
                expiresIn: process.env.JWT_TOKEN_REFRESH_EXPIRES_IN_NOT_REMEMBER
            }
        }
    }
}

