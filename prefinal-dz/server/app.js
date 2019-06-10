const express = require('express');
const { serverMiddleConf, serverConf} = require('./config/server');
const { passport, LocalStrategy } = require('./config/config-passport');
const mongoose = require('mongoose');
const cors = require('cors');

const app = new express();
app.use(cors());

serverMiddleConf(app, express);
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public/'));
app.use(passport.initialize());


mongoose.connect(serverConf.mongoDb, { useNewUrlParser: true })
    .then(() => { app.listen(serverConf.port, () => { console.log(`Sever is Running on port ${serverConf.port}`)})})
    .catch(err => { console.log(err) });

const mainRouter = require('./routes/mainRoutes');
const cpRouter = require('./routes/cpRoutes');
app.use('/', mainRouter);
app.use('/cp', passport.authenticate('jwt', {session: false}), cpRouter);

app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});

module.exports = app;