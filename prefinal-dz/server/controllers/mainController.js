const User = require('../models/userModel');
const passport = require('passport');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config-passport');
const randtoken = require('rand-token');

let refreshTokens = {};

signToken = user => {
    return JWT.sign({
        iss: 'NodeAuth',
        sub: user.id,
    }, JWT_SECRET, {expiresIn: "1h"});
};

refreshToken = (id, refresh) => {
    if((refresh in refreshTokens) && (refreshTokens[refresh] == id)) {
        const user = {
            id: id
        };

        return token = signToken(user);

    } else {

        return false;
    }
};

module.exports = {

    signUp: async (req, res, next) => {
        try {

            // Проверка на существование имейла
            const checkedUser = await User.findOne({email: req.value.body.email});

            if(checkedUser) {
                return res.status(403).json({error: 'Имейл уже занят'});

            }

            delete req.value.body.confirm_password;

            const newUser = new User(req.value.body);

            newUser.save((err) => {
                if(err) throw new Error(err);
                console.log('Saved');
            });

            const token = signToken(newUser);
            res.status(200).json({registerConfirm: true, token});

        } catch (err) {
            next(err);
            console.log(err);
        }
    },

    login: async (req, res, next) => {
        const token = signToken(req.user);
        const refreshToken = randtoken.uid(256);

        refreshTokens[refreshToken] = req.user.id;

        res.status(200).json({ token, refreshToken });
    },

    refresh: async(req, res, next) => {
        const { id, refresh } = req.body;
        const token = refreshToken(id, refresh);
        if(token) {
            res.status(200).json({token})
        } else {
            res.status(401);
        }
    },

    index: async (req, res) => {

        const user = await User.findOne({username: 'bing19'}, (err, data) => {

            if(err) return console.log(err);

            return data;
        });
        // User.isValidPasswords();
        res.render('index', {user: user})

    },

};
