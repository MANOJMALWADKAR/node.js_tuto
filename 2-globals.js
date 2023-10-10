const sayHi = require("./5-utils");
const names = require("./4-names")
const data = require('./6-alternate-flavor')
require('./7-mind-granade')
// const { john, peter } = require("./4-names")

// console.log(module.exports)
console.log(data)
sayHi('manoj')
sayHi(names.john)
sayHi(names.peter)
// sayHi(john)
// sayHi(peter)