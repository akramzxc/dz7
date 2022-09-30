class GroudTransport {
    constructor(title, model, price, color) {
        this.title = title;
        this.model = model;
        this.price = price;
        this.color = color;
    }
}

class Car extends GroudTransport {
    constructor(title, model, price, color) {
        super(title, model, price, color)
    }
}

const Lexus = new Car('Lexus', 'ES 350 Luxury', '6 621 000 ₽', 'nigger')
const Mazda = new Car('Mazda 6', '2.5 T AT Executive Plus', '3 833 000 ₽', 'red')
const Skoda = new Car('Skoda Rapid II', '1.6 MT Sport edition', '1 602 000 ₽', 'blue')
console.log(Lexus, Mazda, Skoda);

class AirTransport {
    constructor(title, model, price, color) {
        this.title = title;
        this.model = model;
        this.price = price;
        this.color = color;
    }
}

class plane extends AirTransport {
    constructor(title, model, price, speed) {
        super(title, model, price, speed)
    }
}

const DassaultFalcon = new plane('Dassault Falcon', '10X', '$ 75 млн', '1 132 km/h')
const BombardierChallenger = new plane('Bombardier Challenger', '3500', ' $ 26,7 млн', '991 km/h')
const Pilatus = new plane('Pilatus', 'PC-12 NGX', '$ 20,7 млн', '537')
console.log(DassaultFalcon, BombardierChallenger, Pilatus);