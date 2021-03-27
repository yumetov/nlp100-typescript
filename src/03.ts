export {};

let text =
  'Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics.';
let words = text.replace(/[\.\,]/g, '').split(' ');
let word_lengths = words.map((word) => word.length);

console.log({ word_lengths });
