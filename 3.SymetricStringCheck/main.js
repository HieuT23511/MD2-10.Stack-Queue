"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack_1 = require("./Stack");
var Queue_1 = require("./Queue");
var stringNeedCheck = 'able was I ere I saw elba';
var stackString = new Stack_1.Stack();
var queueString = new Queue_1.Queue();
function symetricStringCheck(inputString) {
    for (var i = 0; i < inputString.length; i++) {
        stackString.push(inputString[i]);
        queueString.enqueue(inputString[i]);
    }
    for (var j = 0; j < inputString; j++) {
        if (stackString.pop() !== queueString.dequeue()) {
            return false;
        }
        return true;
    }
}
symetricStringCheck(stringNeedCheck);
