// module.exports = (string_input, other_input, repeat = x => {
//     if (typeof(x) == `number`)
//         return '!'.repeat(x);
//     else
//         return '!'.repeat(string_input.length);
// }) => {
//     return `${string_input}${repeat(other_input)}`
// };
//
// ${string_input}
module.exports = (string_input, bangs=string_input.length) => `${string_input}${"!".repeat(bangs)}`;
