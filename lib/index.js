"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commafy = void 0;
var commafy = function (num, comma) {
    if (comma === undefined)
        comma = ",";
    var numArr = num.split(".");
    var arr = [];
    for (var i = 0; i < numArr[0].length / 3; i++) {
        var start = numArr[0].length - (i + 1) * 3;
        start = start >= 0 ? start : 0;
        var end = numArr[0].length - i * 3;
        arr.push(numArr[0].slice(start, end));
    }
    if (numArr[1]) {
        var i = void 0;
        for (i = numArr[1].length - 1; i >= 0; i--) {
            if (numArr[1][i] !== "0") {
                break;
            }
        }
        numArr[1] = numArr[1].substring(0, i + 1);
    }
    return arr.reverse().join(comma) + (numArr[1] ? "." + numArr[1] : "");
};
exports.commafy = commafy;
