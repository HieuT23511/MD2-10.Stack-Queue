export class Queue {
    containerQueue : string[]=[];
    constructor() {
    }
    enqueue(item:string){
        this.containerQueue.push(item);
    }
    dequeue(){
        return this.containerQueue.shift();
    }
}