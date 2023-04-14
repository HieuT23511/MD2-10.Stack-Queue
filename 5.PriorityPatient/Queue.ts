import {Patient} from "./Patient";

export class Queue {
    listPatient :Patient[] = [];
    listCheckup: string[]=[];
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
        let dequeuePatient: Patient | undefined = this.listPatient.shift();
        if(dequeuePatient){
            this.listCheckup.push(dequeuePatient.getName())
            console.log('List Patient Checkup: ')
        }
        return this.listCheckup
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