let config = {
    development: {
        url: "",
        //MySQL database info
        database: {
            host: "127.0.0.1",
            port: 3306,
            db_name: "database_test",
            username: "root",
            password: "Oseriemen20",
            dialect: "mysql"
        },
        redisStore: {
            url: "miscellaneous",
            secret: "tommy"
        },
        server: {
            host: "127.0.0.1",
            port: 3000
        }
    },
    production: {

    }
};
module.exports = config;