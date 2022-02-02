"use strict";

const flight = "LH234";
const jonas = {
    name: "Jonas Schemedtmann",
    passport: 3198263192,
};

const checkIn = function (flightNum, passenger) {
    flightNum = "LH999";
    passenger.name = "Mr. " + passenger.name;

    if (passenger.passport === 3198263192) {
        console.log("Check in");
    } else {
        console.log("Wrong passport!");
    }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
