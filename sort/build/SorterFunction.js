"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SorterFunction = void 0;
function SorterFunction(array) {
    function goingUP(a, b) {
        return a - b;
    }
    if (array instanceof Array) {
        array.sort(goingUP);
    }
    return array;
}
exports.SorterFunction = SorterFunction;
