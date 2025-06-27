let obj1 = {
    name: "Diane",
    salary: 10000,
    age: 30,
    func(){
        return this.name + " is " + this.age + " years old. "
    },
};
console.log(obj1.func());