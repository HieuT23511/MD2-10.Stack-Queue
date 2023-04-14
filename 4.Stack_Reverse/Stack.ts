export class Stack {
    container : number[]=[];
    constructor() {
    }
    push(item:number){
        this.container.push(item);
    }
    pop(){
        return this.container.pop();
    }
}