var args = process.argv.slice(2);
// console.log(args);
function html(args, name, unparsed_html) {
    var replacedS = unparsed_html.replace(/'/g, "&apos;");
    replacedS = replacedS.replace(/"/g, "&quot;");
    replacedS = replacedS.replace(/</g, "&lt;");
    replacedS = replacedS.replace(/>/g, "&gt;");
    replacedS = replacedS.replace(/"&"/g, "&amp;");
    var this_name = name.replace(/'/g, "&apos;");
    this_name = this_name.replace(/"/g, "&quot;");
    this_name = this_name.replace(/</g, "&lt;");
    this_name = this_name.replace(/>/g, "&gt;");
    this_name = this_name.replace(/"&"/g, "&amp;");
    return `<b>${this_name} says</b>: "${replacedS}"`;
}
console.log(html`<b> ${args[0]} says </b>: ${args[1]}`);

// Official solution
// console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

// function html(pieces, ...substitutions) {
//     var result = pieces[0];
//     for (var i = 0; i < substitutions.length; ++i) {
//         result += escape(substitutions[i]) + pieces[i + 1];
//     }

//     return result;
// }

// function escape(s) {
//     return s.replace(/&/g, "&amp;")
//             .replace(/</g, "&lt;")
//             .replace(/>/g, "&gt;")
//             .replace(/'/g, "&apos;")
//             .replace(/"/g, "&quot;");
// }

