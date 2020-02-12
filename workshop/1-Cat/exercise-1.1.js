// Exercise 1.1
// ------------
// Creating a Cat class.

// A) Create an object that represents a cat.
// It should have properties for tiredness, hunger, loneliness and happiness.
// You can set all of these properties to 0 by default.

class Cat {
    constructor() {
        this.species = 'cat';
        this.name = name;
        this.tiredness = 0;
        this.hunger = 0;
        this.loneliness = 0;
        this.happiness = 0;
    }
}

// B) Instantiate a cat called 'boots' with the Cat class.
let boots = new Cat('boots')

// C) What do you see when you console.log(boots)?
Cat {
    species: 'cat'
    name: 'boots',
    tiredness: 0,
    hunger: 0,
    loneliness: 0,
    happiness: 0 
}

// D) What if I want to output just boots' species?
console.log(boots.species)

// E) Boots' name is not part of its object.
//    Update the class above to accept have a name parameter
//    and pass Boots' name as an argument.


class Cat {
    constructor(boots) {
        this.species = 'cat';
        this.name = name;
        this.tiredness = 0;
        this.hunger = 0;
        this.loneliness = 0;
        this.happiness = 0;
    }
}

let boots = new Cat('boots');