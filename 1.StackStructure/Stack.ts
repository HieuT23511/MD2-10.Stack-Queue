export class Stack <G> {
    container :G[]=[];
    constructor() {
    }
    push(data :G){
        this.container.push(data);
    }
    pop(){
        return this.container.pop();
    }
    size():number{
        return this.container.length;
    }
}
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack);
stack.pop();
console.log(stack);