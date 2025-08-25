class Dessert{
    constructor(calories = 1){
        this.calories = calories;
    }
}

class IceCream extends Dessert{
constructor(flavor, calories, toppings = []){
    super(calories); //super is used inside the subclass and is used to call the dessert constructor 
    this.flavor = flavor;
    this.toppings = toppings;
}
 addTopping(topping){
    this.toppings.push(topping);
 }

}