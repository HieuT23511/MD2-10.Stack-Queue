export class Stack {
    containerStack : string[] = [];
    constructor() {
    }
    push(item:string){
        this.containerStack.push(item);
    }
    pop(){
        return this.containerStack.pop();
    }
}