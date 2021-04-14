const jwt = require('jsonwebtoken');
const Token = require('../models/Token');
const { v4: uuid } = require('uuid');
const { tokens, secret } = require('../config/default.json').jwt;

const generateAccessToken = (userId) => {
    const payload = {
        userId,
        type: tokens.access.type
    };
    const options = { expiresIn: tokens.access.expiresIn }

    return {
        token: jwt.sign(payload, secret, options),
        expiresIn: options.expiresIn
    };
}

const generateRefreshToken = () => {
    const payload = {
        id: uuid(),
        type: tokens.refresh.type
    };
    const options = { expiresIn: tokens.refresh.expiresIn }

    return {
        id: payload.id,
        token: jwt.sign(payload, secret, options)
    }
}

const replaceDbRefreshToken = async (tokenId, userId) => {
    await Token.deleteOne({ userId });

    const newToken = new Token({ tokenId, userId });
    await newToken.save();
}

const updateTokens = async (userId) => {
    const accessToken = generateAccessToken(userId);
    const refreshToken = generateRefreshToken();
    const expiresIn = Date.now() + +accessToken.expiresIn;

    await replaceDbRefreshToken(refreshToken.id, userId);

    return {
        accessToken: accessToken.token,
        refreshToken: refreshToken.token,
        expiresIn
    };
}

module.exports = { updateTokens };