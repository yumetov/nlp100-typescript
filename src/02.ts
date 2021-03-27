export {};

let text1 = 'パトカー';
let text2 = 'タクシー';
console.log({ text1 });
console.log({ text2 });

function mergeStrings(...strs: string[]): string {
  const strArrays = strs.map((str) => str.split(''));
  let mergedStrArray: string[] = [];
  const maxLength = strArrays.reduce((a, b) => Math.max(a, b.length), 0);
  for (let i = 0; i < maxLength; ++i) {
    strs.forEach((str) => {
      if (i < str.length) {
        mergedStrArray.push(str[i]);
      }
    });
  }
  const mergedStr = mergedStrArray.join('');
  return mergedStr;
}

let mergedString = mergeStrings(text1, text2);
console.log({ mergedString });
