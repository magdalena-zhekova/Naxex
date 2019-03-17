class Animal {
    constructor(age) {
        this.age = age;
    }

    sleep() {
        console.log(`zzzzzz`);
    }
}

class Predator extends Animal{
    eat(){
        console.log(`yummy`);
    }
}

class Dolphin extends Animal{
    swim(){
        console.log(`splah`);
    }
}

class Lion extends Predator{
    roar(){
        console.log(`wrrrrr`);
    }
}

class Eagle extends Predator{
    fly(){
        console.log(`whoohooo`);
    }
}

class Bee extends Animal{
    fly(){
        console.log(`whoohooo`);
    }
}

let newLion = new Lion(25);
console.log(newLion.age);

let newDolphin = new Dolphin(3);
newDolphin.swim();

let newBee = new Bee(11);
newBee.fly();