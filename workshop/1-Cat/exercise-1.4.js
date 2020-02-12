// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good. Our Cat can modify its properties but we don't have a way to lower them...
// Write a wait method that accepts a minutes parameter and slowly lowers or increases the properties.

class Cat {
    constructor(name, breed) {
        this.species = 'cat';
        this.name = name;
        this.breed = breed;
        this.hunger = 0;
        this.happiness = 0;
        this.tiredness = 0;
        this.loneliness = 0;
    }
    play = (minutes) => {
        this.loneliness = this.loneliness - (minutes * 3);
        this.happiness = this.happiness + (minutes * 3);
    }
    eat = (grams) => {
        this.hunger = this.hunger - (grams * .20);
        this.happiness = this.happiness + (grams * .15);
    }
    sleep = (hours) => {
        this.tiredness = this.tiredness + (hours * 5);
        this.happiness = this.happiness + (hours * 2);
    }
    wait = (minutes) => {
        this.happiness -= minutes * 1;
        this.loneliness += minutes * 1;
        this.hunger += minutes * 1;
        this.happiness -= minutes * 1;
    }
}
let boots = new Cat('boots', 'siamese cat')
boots.play(50);
boots.eat(70);
boots.sleep(16);
boots.wait(900);
console.log(boots)


// B) Make Boots wait 20 minutes and call then console.log(boots);

