"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack_1 = require("./Stack");
var arrayInput = [1, 2, 3, 3, 4, 5, 5, 7];
var stack = new Stack_1.Stack();
function ReverseElementInArray(array) {
    for (var i = 0; i < array.length; i++) {
        stack.push(array[i]);
    }
    // return stack;
    for (var j = 0; j < array.length; j++) {
        array[j] = stack.pop();
    }
    return array;
}
console.log(ReverseElementInArray(arrayInput));
