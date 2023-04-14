"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this.container = [];
    }
    Stack.prototype.push = function (item) {
        this.container.push(item);
    };
    Stack.prototype.pop = function () {
        return this.container.pop();
    };
    return Stack;
}());
exports.Stack = Stack;
