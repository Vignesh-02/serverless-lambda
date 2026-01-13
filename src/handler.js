"use strict";

module.exports.generateRandomNumber = () => {
  try {
    const num = Math.floor(Math.random() * 10);
    const out = num + 7;

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: "Successfully generated a random lucky number",
        number: out
      })
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: "Failed to generate random number",
        error :err.message
      })
    };
  }
};
