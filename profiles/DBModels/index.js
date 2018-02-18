const fs = require("fs"); // file system for grabbing files
const path = require("path");
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../../config')[env];

//Initializes db and uses config variables to populate verification fields
const db = new Sequelize(config.database.db_name, config.database.username, config.database.password, {
    host: config.database.host,
    dialect: config.database.dialect,
    port: config.database.port,
    //limits Operator Alias use for security reasons
    operatorsAliases: false
});

//Connects db, forces all models to sync to test databases
db.sync({force: true, match: /_test$/})
    .then(() => {
        console.log("Database is successfuly connected");
    })
    .catch((err) => {
        console.log(err);
    })

module.exports = db;

// Load each model file
const models = Object.assign({}, ...fs.readdirSync(__dirname)
    .filter((file) =>
        (file.indexOf(".") !== 0) && (file !== 'index.js')
    )
    .map(function (file) {
        const model = require(path.join(__dirname, file));
        // console.log(model.init(sequelize).tableName)
        return {
            [model.name]: model.init(db),
        };
    })
);

// Load model associations
for (const model of Object.keys(models)) {
    typeof models[model].associate === 'function' && models[model].associate(models);
}

const bcrypt = require('bcrypt');
const saltRounds = 4;

//User Hooks

//using the user model encrypt and salt password before create
models.User.beforeCreate ((user, options) => {
    console.log("Storing the password");
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(saltRounds, (err, salt) => { //generate salt using saltRounds provided
            if(err) return reject(err);
            bcrypt.hash(user.passwordHash, salt, (err, hash) => { //generate hash using password and salt generated
                console.log("Getting password encrypted");
                user.passwordHash = hash; //sets user password to hash
                return resolve(user, options);
            });
        });
    });
});

//instance Methods
models.User.prototype.validatePassword = ((user, testPass) => {

    console.log("Validating password" + " : " + user.passwordHash + " and " + testPass);
    bcrypt.compare(testPass, user.passwordHash, (err, res) => {
        if (err) return (err);
        else{
            if(res) {
                console.log("validate successfully");
                return res;
            }
            else {
                console.log("validate unsuccessful");
                return res;
            }

        }
    });
});

module.exports = models;

