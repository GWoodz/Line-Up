"use strict";
//declaration entity file for user model
import profiles from "./profileTypes";

// const canGenerateId = () => ({
//
//     generateId(x) {
//
//         let someId = x;
//
//         //checks to see if there is an existing id
//         if (this.id) {
//             console.log("There is already an existing id");
//             return
//         }
//         console.log("attempting to add id...");
//         //adds new id property to user object
//         Object.defineProperty(this, "id", {
//             value: someId
//         });
//     },
// });

//gives user ability to check if payment is setup
// const checkPaymentInfo = (state) => ({
//
//     hasPaymentMethod: () => {
//       //check if paymentInfo is empty
//       if(state.paymentInfo != null){
//         return true
//       }
//       else{
//         return false
//       }
//     }
// });

//Public variables and objects

function User(info) {

    //creates a new user profile
    let state = {

        id: info.id,
        type: profiles.profileType[0],
        status: profiles.status[0],
        firstName: info.firstName,
        lastName: info.lastName,
        birthdate: info.birthdate,
        email: info.email,
        phoneNumber: info.phoneNumber,
        city: info.city || null,
        state: info.state || null,
        country: info.country || null,
        gender: info.gender,
        paymentInfo: null,
        password: info.password

    }
        return Object.assign({}, state);

}

module.exports = User;
