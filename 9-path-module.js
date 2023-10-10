const path = require('path');

// PATH SEPERATOR -> / \
// console.log(path.sep)

// Joins one or more path segments into a single path
const filePath = path.join('/content', '/subfolder', '/test.txt')
// console.log(filePath)

//base of path -> file name
const base = path.basename(filePath)
// console.log(base)   //test.txt

//absolute path from directory
const absolute = path.resolve('content', 'subfolder', 'test.txt')
console.log(absolute)

console.log(path.delimiter);