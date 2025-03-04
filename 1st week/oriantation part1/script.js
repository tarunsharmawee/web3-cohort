// base code 1 -
console.log("\n");
const crypto = require("crypto");
const { exit } = require("process");
const { stringify } = require("querystring");
const { StringDecoder } = require("string_decoder");

let input = "100xdevs";
let hash = crypto.createHash("sha256").update(input).digest("hex");
console.log(`base code output : ${hash}`); // 55711980d50fd24989409a7a7d4e15fcd206556eec1245c94a6e60910dc4e41d
console.log("\n");

// Assignment 1
console.log("\n");
const findHashWithPrefix = (prefix) => {
  input = 1;
  while (true) {
    let inputStr = input.toString();
    hash = crypto.createHash("sha256").update(inputStr).digest("hex");
    if (hash.startsWith(prefix)) {
      return { input: inputStr, hash: hash };
    }
    input++;
  }
};
let result = findHashWithPrefix("0000");
console.log(`Assignment 1 -> `);
console.log(`input: ${result.input}`);
console.log(`hash: ${result.hash}`);

console.log("\n");

// Assignment 2
console.log("\n");
const findInputWithPrefix = (prefix) => {
  input = 1;
  let inputStr = prefix + input;
  hash = crypto.createHash("sha256").update(inputStr).digest("hex");
  return { input: inputStr, hash: hash };
};

result = findInputWithPrefix("100xdevs");
console.log(`Assignment 2 -> `);
console.log(`input: ${result.input}`);
console.log(`hash: ${result.hash}`);
console.log("\n");

// Assignment 3
console.log("\n");
function findHashWithPrefix2(prefix) {
  input = 0;
  while (true) {
    inputStr =
      `
harkirat => Raman | Rs 100
Ram => Ankit | Rs 10
    ` + input.toString();
    hash = crypto.createHash(`sha256`).update(inputStr).digest("hex");
    if (hash.startsWith(prefix)) {
      return {
        input: inputStr,
        hash: hash,
      };
    }
    input ++
  }
}
result = findHashWithPrefix2('00000')
console.log(`Assignment 3 ->`)
console.log(`input : ${result.input}`)
console.log(`hash : ${result.hash}`)
console.log("\n");

// Assignment 4
// for the 4th assignment we have to see these videos - 
// blockchain 101 - a visual Demo - https://www.youtube.com/watch?v=_160oMzblY8&t=13s
// blockchain 101 - part2 - public/private keys & signing - https://youtu.be/xIDL_akeras