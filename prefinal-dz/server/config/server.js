const serverMiddleConf = (app, express) => {
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));
    app.set('view engine', 'pug');
};

 const serverConf = {
    port: 3001,
    mongoDb: "mongodb://localhost:27017/mydb"
};

module.exports = { serverMiddleConf, serverConf };
