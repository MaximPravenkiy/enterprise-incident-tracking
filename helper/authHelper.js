const jwt = require('jsonwebtoken');
const Token = require('../models/Token');
const { v4: uuid } = require('uuid');
const { tokens, secret } = require('../default').jwt;
const { access, refresh } = tokens;

const generateAccessToken = (userId, fullname) => {
    const payload = {
        userId,
        type: access.type,
        fullname
    };
    const options = { expiresIn: access.expiresIn };

    return {
        token: jwt.sign(payload, secret, options),
        expiresIn: options.expiresIn
    };
};

const generateRefreshToken = (remember) => {
    const payload = {
        id: uuid(),
        type: refresh.type
    };

    const options = {
        expiresIn: remember ? refresh.expiresInRemember : refresh.expiresIn
    };

    return {
        id: payload.id,
        token: jwt.sign(payload, secret, options)
    };
};

const replaceDbRefreshToken = async (tokenId, userId, remember) => {
    await Token.deleteOne({ userId });

    const newToken = new Token({ tokenId, userId, remember });

    await newToken.save(function (error) {
        console.log(error);
    });
};

const updateTokens = async (userId, remember, fullname) => {
    const { token: accessToken } = generateAccessToken(userId, fullname);
    const { token: refreshToken, id: refreshTokenId } =
        generateRefreshToken(remember);

    await replaceDbRefreshToken(refreshTokenId, userId, remember);

    return {
        accessToken: accessToken,
        refreshToken: refreshToken
    };
};

module.exports = { updateTokens };
