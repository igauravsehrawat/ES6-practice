// including 2 till the last
const inputs = process.argv.slice(2);
var result = inputs.map(arr => arr[0])
                      .reduce((result, arr) => result + arr);
console.log(`[${inputs}] becomes "${result}"`)
