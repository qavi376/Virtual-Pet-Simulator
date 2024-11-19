//OBJECT SETUP//
class Pet {
}

//~subclass setup~//
class Dog extends Pet {
    constructor(name, walks) {
        super(name);
        this._walks = walks;
    }
    walkDog() {
        this._walks ++
        this._play += 2;
        this._thirst --;
        this._hunger --;
    }
}

class Cat extends Pet {
    constructor(name, groomed) {
        super(name);
        this._groomed = groomed;
    }
    lickSelf() {
        this._groomed ++;
    }

}

class Bunny extends Pet {
    constructor(name, anxiety) {
        super(name);
        this._anxiety = anxiety;
    }
    petBunny() {
        this._anxiety ++;
    }
}

//~subclass setup~//
function alive(cyberPet){
    cyberPet.intervalID = setInterval(()=>{
        if (cyberPet.playWith == true || cyberPet.giveDrink == true || cyberPet.giveFood == true) {
            clearInterval(cyberPet.intervalID);
        } else {
            cyberPet.alone();
            console.log(cyberPet);
        }
    }, 3000)
};

// //~testing the interval function~//
// console.log(ted);
// alive(ted);
// console.log(ted);