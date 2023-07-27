class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    carStats() {
        return `This Car has ${ this.doors } doors, a ${this.engine} engine and a beautiful
        ${this.color} color!`
    }
}


const cx5 = new Car(4, 'v6', 'green');
console.log(cx5);
console.log(cx5.carStats());