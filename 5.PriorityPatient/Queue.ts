import {Patient} from "./Patient";

export class Queue {
    listPatient :Patient[] = [];
    size :number;
    constructor() {
        this.size = 0;
    }
    enqueue(element: Patient){
        this.size ++;
        return this.listPatient.push(element)
    }
    dequeue(){
        this.size --;
        return this.listPatient.shift();
    }
    sortPatientByCode(){
        this.listPatient.sort((a:Patient,b:Patient)=> a.getCode() - b.getCode());
    }
    nextPatient(){
        return `Patient ${this.listPatient[0].getName()} come in`
    }
    waitPatient(){
        return `Patient ${this.listPatient[1].getName()} prepare`
    }
}