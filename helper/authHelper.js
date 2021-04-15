const jwt = require('jsonwebtoken');
const Token = require('../models/Token');
const { v4: uuid } = require('uuid');
const { tokens, secret } = require('../config/default').jwt;

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

const generateRefreshToken = (remember) => {
    const payload = {
        id: uuid(),
        type: tokens.refresh.type
    };

    const options = { expiresIn: remember
            ? tokens.refresh.expiresInRemember
            : tokens.refresh.expiresIn
    }

    return {
        id: payload.id,
        token: jwt.sign(payload, secret, options)
    }
}

const replaceDbRefreshToken = async (tokenId, userId, remember) => {
    await Token.deleteOne({ userId });

    const newToken = new Token({ tokenId, userId, remember });
    await newToken.save();
}

const updateTokens = async (userId, remember) => {
    const accessToken = generateAccessToken(userId);
    const refreshToken = generateRefreshToken(remember);
    const expiresIn = Date.now() + parseInt(accessToken.expiresIn) * 60 * 1000;

    await replaceDbRefreshToken(refreshToken.id, userId, remember);

    return {
        accessToken: accessToken.token,
        refreshToken: refreshToken.token,
        expiresIn
    };
}

module.exports = { updateTokens };