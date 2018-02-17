/*
* Barber DB class for MySQL
* Has a Userid Foreign Key*/
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sequelize = require('sequelize');

module.exports = function (_Sequelize$Model) {
    _inherits(Barber, _Sequelize$Model);

    function Barber() {
        _classCallCheck(this, Barber);

        return _possibleConstructorReturn(this, (Barber.__proto__ || Object.getPrototypeOf(Barber)).apply(this, arguments));
    }

    _createClass(Barber, null, [{
        key: 'init',
        value: function init(sequelize) {
            return _get(Barber.__proto__ || Object.getPrototypeOf(Barber), 'init', this).call(this, {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                username: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                isPremium: {
                    type: Sequelize.BOOLEAN,
                    allowNull: false,
                    defaultValue: false
                }
            }, { sequelize: sequelize });
        }
    }, {
        key: 'associate',
        value: function associate(models) {
            this.belongsTo(models.User, { //associates Barber with User as a source, adds foreign key
                foreignKey: {
                    allowNull: false
                }
            });
        }
    }]);

    return Barber;
}(Sequelize.Model);
//# sourceMappingURL=Barber.js.map