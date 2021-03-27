export {};

let text =
  'Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can.';
let indexes_1char = [1, 5, 6, 7, 8, 9, 15, 16, 19];

let words = text.split(' ');

let periodicTable: { [key: string]: number } = {};
words.forEach((word, i) => {
  const elm = 0 <= indexes_1char.indexOf(i + 1) ? word[0] : word.slice(0, 2);
  periodicTable[elm] = i + 1;
});

console.log({ periodicTable });
