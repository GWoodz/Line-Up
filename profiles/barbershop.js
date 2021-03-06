"use strict";

const profiles = require("./profileTypes");

function BarberShop(user, profileObj) {
    let state = {
        type: profiles.profileType[2],
        shopName: profileObj.shopName,
        city: profileObj.city,
        state: profileObj.state
    }
            return Object.assign({}, state, user);

}

module.exports = BarberShop;
