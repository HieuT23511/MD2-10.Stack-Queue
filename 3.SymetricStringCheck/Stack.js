"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this.containerStack = [];
    }
    Stack.prototype.push = function (item) {
        this.containerStack.push(item);
    };
    Stack.prototype.pop = function () {
        return this.containerStack.pop();
    };
    return Stack;
}());
exports.Stack = Stack;
