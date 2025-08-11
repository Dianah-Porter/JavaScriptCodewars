class Hero {
  // add default values here
    constructor(name = 'Hero') {
       this.name = name;
      this.position = '00';
      this.health = 100;
      this.damage = 5;
      this.experience = 0;
    }
}
const hero2 = new Hero("Porter");
console.log(hero2.name);  //porter
console.log(hero2.health);  //100