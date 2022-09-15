'use strict';

module.exports.generateRandomNumber =  (event) => {
  const num = parseInt(Math.random() * 10);
  console.log('this is my num ',num);
  return num;
};
