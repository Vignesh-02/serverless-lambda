"use strict";

module.exports.generateRandomNumber = (event) => {
    const response = { statusCode: 200 };
    try {
        const num = parseInt(Math.random() * 10);
        //   Adding number 7 to it
        const out = num + 7;

        response.body = JSON.stringify({
            message: "Successfully generated a random lucky number",
            number: out,
        });
    } catch (err) {
        console.log(err);
        response.statusCode = 500
        response.body = JSON.stringify({
            message: "Failed to generate random number",
            error: err.message,
            errorStack: err.stack
        });
    }
    return response;
};
