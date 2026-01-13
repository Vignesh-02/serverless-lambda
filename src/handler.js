'use strict';

module.exports.generateRandomNumber =  (event) => {
  const num = parseInt(Math.random() * 10);
//   Adding number 7 to it
  const out = num + 7;
  return out;
};
