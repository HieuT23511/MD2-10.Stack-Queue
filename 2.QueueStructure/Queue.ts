export class Queue <G> {
    container :G[]=[];
    constructor() {
    }
    enqueue(data :G){
        this.container.push(data);
    }
    dequeue() :G|undefined{
        return this.container.shift();
    }
    size():number{
        return this.container.length;
    }
}
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue);
queue.dequeue();
console.log(queue);