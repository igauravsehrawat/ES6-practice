module.exports = function average(...args) {
    var sum = 0;
    // args.forEach((value) => {
    //     sum += value;
    // });
    var sum = args.reduce((soFar, value) => {
        return soFar += value;
    }, 0);
    // return sum/args.length;
    return sum/args.length;
}
