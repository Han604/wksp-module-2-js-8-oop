// Exercise 1.3
// ------------
// Creating a Cat class - Part 3

// A) In the previous exercises, we created a Cat class and used it to create a boots object.
// Rewrite that Cat class, but let's also add some functions that will modify the various porperties of a cat.
// Write methods that will update tiredness, hunger, loneliness, and happiness.

// HINT: You need to write arrow functions here. () => {}
// - Write a sleep method that accept hours and reduces tiredness by 5 times that number.
// - Write an eat method that accept grams of food and reduces hunger by 1/5 that number.
// - Write an play method that accept minutes and reduces loneliness by 3 times that number.
// - the happiness property should be modified all of the above methods as well.
// You decide how much sleep, eat, and play affects your cat's happiness.


// B) call the different methods with appropriate values and then console.log boots to see what happened to the property values.
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
}
let boots = new Cat('boots', 'siamese cat')
boots.play(50);
boots.eat(70);
boots.sleep(16);
console.log(boots)
