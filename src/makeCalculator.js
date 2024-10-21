'use strict';

/**
 * @return {object}
 */

function makeCalculator() {
  const mathOperate = {
    result: 0,
    operate(mathMethods, number) {
      mathMethods.call(this, number);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
    add(value) {
      this.result += value;

      return this;
    },
    subtract(value) {
      this.result -= value;

      return this;
    },
    multiply(value, result) {
      this.result *= value;

      return this;
    },
    divide(value, result) {
      this.result /= value;

      return this;
    },
  };

  return mathOperate;
}

const calculator = makeCalculator();

calculator.operate(calculator.add, 21);

// console.log(calculator.result); // 21

calculator.reset();
// console.log(calculator.result); // 0

module.exports = makeCalculator;
