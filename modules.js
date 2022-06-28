function repeatString(a, b) {
  return a.repeat(b);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function sumAll(array) {
  const initialValue = 0;
  return array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
}

module.exports = { repeatString, reverseString, sumAll };
