const testOptional = require("../extensions/it-optional");

function getRectangleArea(width, height) {
  return width * height
}
console.log(getRectangleArea(5, 10));
console.log(getRectangleArea(5, 5));

function getCircumference(radius) {
  return 2 * Math.PI * radius;
};
console.log(getCircumference(5));
console.log(getCircumference(3.14));
console.log(getCircumference(0));

function getAverage(number1, number2) {
  return (number1 + number2) / 2;
}
console.log(getAverage(5, 5));
console.log(getAverage(10, 0));
console.log(getAverage(-3, 3));

function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}
console.log(getDistanceBetweenPoints(0, 0, 0, 1));
console.log(getDistanceBetweenPoints(0, 0, 1, 0));
console.log(getDistanceBetweenPoints(-5, 0, 10, -10));

function getLinearEquationRoot(a, b) {
  if (a === 0) { console.log("Коэффициент 'a' не может быть равен нулю."); }
 return -b / a;
}
console.log(getLinearEquationRoot(5, 10));
console.log(getLinearEquationRoot(1, -8));
console.log(getLinearEquationRoot(5, 0));



function getMultiplyBetweenCoordinates(x1, y1, x2, y2) {
  return x1 * x2 + y1 * y2;
}
let multiplyCoord = getMultiplyBetweenCoordinates(1, 0, 0, 1);
let x1 = 1, y1 = 0, x2 = 0, y2 = 1;
let dotA = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
let dotB = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
function getAcosAngle(multiply, dotA, dotB){
  return Math.acos(multiply / (dotA * dotB));
}
console.log(getAcosAngle(multiplyCoord, dotA, dotB));


function getLastDigit(inputNumber){
   return inputNumber % 10;
}
console.log(getLastDigit(100));

function getDiagonalOfParallelepiped(a, b, c){
return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
}
console.log(getDiagonalOfParallelepiped(1, 1, 1));
console.log(getDiagonalOfParallelepiped(3, 3, 3));
console.log(getDiagonalOfParallelepiped(1, 2, 3));


function roundToPowerOfTen(num, pow) {
 const a = Math.pow(10, pow);
 return Math.round(num / a) * a;
}
console.log(roundToPowerOfTen(1234, 0));
console.log(roundToPowerOfTen(1234, 1));
console.log(roundToPowerOfTen(1234, 2));
console.log(roundToPowerOfTen(1234, 3));
console.log(roundToPowerOfTen(1678, 0));
console.log(roundToPowerOfTen(1678, 1));
console.log(roundToPowerOfTen(1678, 2));
console.log(roundToPowerOfTen(1678, 3));

function isPrime(num){
  if (num <= 1)
    return false;
  if (num <= 3)
    return true;
  if (num % 2 === 0 || num % 3 === 0)
    return false;
  for (let num = 5; Math.pow(num, num - 1 === 1); num++)
    return true
}
 console.log(isPrime(4));
 console.log(isPrime(5));
 console.log(isPrime(6));
 console.log(isPrime(7));
 console.log(isPrime(1));
 console.log(isPrime(12));
 console.log(isPrime(16));
 console.log(isPrime(17));


function toNumber(value, def) {
  let num = Number(value);
  return isNaN(num) ? def : num;
}
console.log(toNumber(null, 0));
console.log(toNumber('test', 0));
console.log(toNumber('1', 0));
console.log(toNumber(new Number(42), 0));

function getCube(num){
  return Math.pow(num, 3);
}
console.log(getCube(3));
console.log(getCube(-2));
console.log(getCube(0));

function getFibonacciNumber(index) {
  if (index === 0)
    return 0;
  if (index === 1)
    return 1;
  let a = 0, b = 1, temp;
  for (let i = 2; i <= index; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
 }
console.log(getFibonacciNumber(0));
console.log(getFibonacciNumber(1));
console.log(getFibonacciNumber(2));
console.log(getFibonacciNumber(3));
console.log(getFibonacciNumber(10));

 * Returns the Fibonacci number located at the index position.
 *
 * @param {number} index
 * @return {number}
 *
 * @example:
 *   0  => 0
 *   1  => 1
 *   2  => 1
 *   3  => 2
 *   10 => 55
 */
function getFibonacciNumber(/* index */) {
  throw new Error('Not implemented');
}

/**
 * Returns the sum of all numbers from 1 to n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   5  => 15 // (1+2+3+4+5)
 *   10 => 55 // (1+2+3+...+10)
 *   1  => 1
 */
function getSumToN(/* n */) {
  throw new Error('Not implemented');
}

/**
 * Returns the sum of the digits of a given number.
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   123 => 6  // (1+2+3)
 *   202 => 4  // (2+0+2)
 *   5   => 5  // 5
 */
function getSumOfDigits(/* num */) {
  throw new Error('Not implemented');
}

/**
 * Returns true if the given number is a power of two, false otherwise.
 *
 * @param {number} num
 * @return {boolean}
 *
 * @example:
 *   4   => true
 *   16  => true
 *   15  => false
 */
function isPowerOfTwo(/* num */) {
  throw new Error('Not implemented');
}

/**
 * Returns the sine of a number.
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   0 => 0
 *   Math.PI / 2 => 1
 */
function getSine(/* num */) {
  throw new Error('Not implemented');
}

/**
 * Returns a string representation of a number in a specified base (radix).
 *
 * @param {number} number
 * @param {number} base
 * @return {string}
 *
 * @example:
 * 255, 16 => 'ff'
 * 2, 2    => '10'
 */
function numberToStringInBase(/* number, base */) {
  throw new Error('Not implemented');
}

/**
 * Returns a string representation of a number in exponential notation.
 *
 * @param {number} number
 * @param {number} fractionDigits
 * @return {string}
 *
 * @example:
 * 12345, 2    => '1.23e+4'
 */
function toExponential(/* number, fractionDigits */) {
  throw new Error('Not implemented');
}

/**
 * Returns a string representation of a number in fixed-point notation.
 *
 * @param {number} number
 * @param {number} fractionDigits
 * @return {string}
 *
 * @example:
 * 12345, 2    => '12345.00'
 * 12.345, 1   => '12.3'
 */
function toFixed(/* number, fractionDigits */) {
  throw new Error('Not implemented');
}

/**
 * Returns a string representation of a number in normal (fixed-point or exponential)
 * notation rounded to precision significant digits.
 *
 * @param {number} number
 * @param {number} precision
 * @return {string}
 *
 * @example:
 * 12345, 7    => '12345.00'
 * 12.345, 4   => '12.35'
 */
function toPrecision(/* number, precision */) {
  throw new Error('Not implemented');
}

/**
 * Returns the primitive value of a Number object.
 *
 * @param {Number} number
 * @return {number}
 *
 * @example:
 * new Number(5) => 5
 * Number(-5)    => -5
 */
function getNumberValue(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns a boolean value indicating whether the parameter is a number or not.
 *
 * @param {number} number
 * @return {boolean}
 *
 * @example:
 * Infinity => false
 * NaN      => false
 * 0        => true
 * 'a' / 1  => false
 * 'a'      => false
 * 5        => true
 * '5'      => false
 */
function isNumber(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns a boolean value indicating whether a number is an integer or not.
 *
 * @param {number} number
 * @return {boolean}
 *
 * @example:
 * 5    => true
 * 5.1  => false
 * '5'  => false
 */
function isInteger(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns a floating point number or, if the number cannot be parsed from the argument, returns NaN.
 *
 * @param {string} str
 * @return {number | NaN}
 *
 * @example:
 * '4.567abcdefgh' => 4.567
 * 'abcdefgh'      => NaN
 */
function getFloatOnString(/* str */) {
  throw new Error('Not implemented');
}

/**
 * Returns an integer of the specified base or, if the number cannot be parsed
 * from the argument, returns NaN.
 *
 * @param {string} str
 * @param {number} base
 * @return {number | NaN}
 *
 * @example:
 * '4.567abcdefgh', 10  => 4
 * 'abcdefgh', 10       => NaN
 * '1.234', 2           => 1
 * '10', 8              => 8
 */
function getIntegerOnString(/* str, base */) {
  throw new Error('Not implemented');
}

/**
 * Returns whether a number is a safe integer.
 *
 * @param {number} number
 * @return {boolean}
 *
 * @example:
 * 10       => true
 * 3.5      => false
 * 2 ** 53  => false
 */
function isSafeInteger(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns the smallest integer less than or equal to a given number.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.9  => 5
 * -5.1 => -6
 */
function roundToSmallestInteger(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns the largest integer greater than or equal to a given number.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.1  => 6
 * -5.9 => -5
 */
function roundToLargestInteger(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns the value of a number rounded to the nearest integer.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.5  => 6
 * 5.4  => 5
 * -5.5 => -5
 */
function roundToNearestInteger(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns the integer part of a number by removing any fractional digits.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.5  => 5
 * 5.4  => 5
 * -5.5 => -5
 */
function getIntegerPartNumber(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns the sum of numbers.
 *
 * @param {number} x1
 * @param {number} x2
 * @param {number} x3
 * @returns {number}
 *
 * @example:
 * 1, 2, 3       => 6
 * 0.1, 0.2, 0.3 => 0.6
 */
function getSumOfNumbers(/* x1, x2, x3 */) {
  throw new Error('Not implemented');
}

/**
 * Returns the largest number.
 *
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @return {number}
 *
 * @example:
 * 1, 2   => 2
 * -5, -6 => -5
 * 0, 5   => 5
 */
function getMaxNumber(/* firstNumber, secondNumber */) {
  throw new Error('Not implemented');
}

/**
 * Returns a random integer in the range from min to max.
 *
 * @param {number} min
 * @param {number} max
 * @return {number}
 *
 * @example:
 * 1, 2  => 1 | 2
 * -5, 0 => -5 | -4 | -3 | -2 | -1 | 0
 * -1, 1 => -1 | 0 | 1
 */
function getRandomInteger(/* min, max */) {
  throw new Error('Not implemented');
}

/**
 * Returns the length of the hypotenuse of a right triangle.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * @example:
 * 3, 4 => 5
 */
function getHypotenuse(/* a, b */) {
  throw new Error('Not implemented');
}

/**
 * Returns count of odd numbers from zero to the resulting number.
 * The resulting number is taken into account.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 4  => 2
 * 5  => 3
 * 10 => 5
 * 15 => 8
 */
function getCountOfOddNumbers(/* number */) {
  throw new Error('Not implemented');
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
  getCube,
  getFibonacciNumber,
  getSumToN,
  getSumOfDigits,
  isPowerOfTwo,
  getSine,
  numberToStringInBase,
  isSafeInteger,
  roundToLargestInteger,
  roundToSmallestInteger,
  roundToNearestInteger,
  getSumOfNumbers,
  isNumber,
  isInteger,
  toExponential,
  toFixed,
  toPrecision,
  getNumberValue,
  getFloatOnString,
  getIntegerOnString,
  getIntegerPartNumber,
  getMaxNumber,
  getRandomInteger,
  getHypotenuse,
  getCountOfOddNumbers,
};
