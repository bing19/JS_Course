const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/userModel');

const JWT_SECRET = '123456789';

passport.serializeUser((user, done) => {
    console.log('Сереадизация пользователя', user);
    done(null, user.id);
});
passport.deserializeUser((id, done) => {
    console.log('Десериализация пользователя', id);
    User.findById(id, (err, user) => {
       err ? done(err) : done(null, user);
   });
});


// JWT STRATEGY
passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET,
}, async (payload, done) => {
    try {
        // Найти пользователя, который указан в токене
        const user = await User.findById(payload.sub);

        if(!user) {
            return done(null, false);
        }

        done(null, user);

    } catch (err){ done(err, false) }
}));

// LOCAL STRATEGY
passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (login, password, done) => {
        try {
            const user = await User.findOne({email: login}) || await User.findOne({username: login});

            if(!user) return done(null, false, {message: 'Нет такого ползователя'});

            const isMatch = await user.isValidPasswords(password);

            if(!isMatch) return done(null, false, {message: 'Неверный пароль'});

            done(null, user);
        } catch (e) {
            done(e, false);
        }

}));

module.exports = {passport, JWT_SECRET};