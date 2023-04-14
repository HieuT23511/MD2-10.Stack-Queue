import {Stack} from "./Stack";
import {Queue} from "./Queue";

let stringNeedCheck = 'able was I ere I saw elba12';
let stackString = new Stack();
let queueString = new Queue();

function symetricStringCheck(inputString:string) {
    for (let i = 0; i < inputString.length; i++) {
        stackString.push(inputString[i]);
        queueString.enqueue(inputString[i]);
    }
    for (let j = 0; j < inputString.length; j++) {
        if (stackString.pop() !== queueString.dequeue()){
            return false
        }
        return true
    }
}
console.log(symetricStringCheck(stringNeedCheck));