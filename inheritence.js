class Father{
    constructor(){
        this.fatherName = "paraphrase";

    }
}




class Child extends Father{
    constructor (name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}
const baby = new Child("Arnold");
const baby2 = new Child("azim");

console.log(baby.getFullName());
console.log(baby2.getFullName());