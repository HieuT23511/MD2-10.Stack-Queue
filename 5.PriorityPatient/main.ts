import {Queue} from "./Queue";
import {Patient} from "./Patient";

let queue = new Queue();
let patient1 = new Patient('Hieu', 5)
let patient2 = new Patient('Toan', 4)
let patient3 = new Patient('Hieu', 6)
let patient4 = new Patient('Thuan', 1)
let patient5 = new Patient('Khanh', 1)
queue.enqueue(patient1);
queue.enqueue(patient2);
queue.enqueue(patient3);
queue.enqueue(patient4);
queue.enqueue(patient5);
queue.sortPatientByCode();
console.table(queue.listPatient);
for (let i = 0; i <4; i++) {
    console.log(queue.nextPatient());
    console.log(queue.waitPatient());
    console.table(queue.dequeue());
    console.table(queue.listPatient);
}
// console.log(queue.waitPatient());
// console.log(queue.listPatient);
