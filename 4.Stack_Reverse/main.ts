import {Stack} from "./Stack";

let arrayInput = [1,2,3,3,4,5,5,7];
let stack = new Stack();
function ReverseElementInArray(array:number[]){
    for (let i = 0; i < array.length; i++) {
        stack.push(array[i]);
    }
    // return stack;
    for (let j = 0; j < array.length; j++) {
         array[j] = stack.pop()
    }
    return array;
}

console.log(ReverseElementInArray(arrayInput));