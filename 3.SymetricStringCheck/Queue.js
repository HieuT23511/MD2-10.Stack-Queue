"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue() {
        this.containerQueue = [];
    }
    Queue.prototype.enqueue = function (item) {
        this.containerQueue.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.containerQueue.shift();
    };
    return Queue;
}());
exports.Queue = Queue;
