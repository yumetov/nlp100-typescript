export {};

let text = 'パタトクカシーー';
console.log({ text });

let extractedText = text
  .split('')
  .filter((v, i) => i % 2 == 0)
  .join('');
console.log(extractedText);
