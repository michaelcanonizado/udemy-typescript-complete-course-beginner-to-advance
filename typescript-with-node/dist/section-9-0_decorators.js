"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Airplane {
    constructor(model, pilot) {
        this.model = model;
        this.pilot = pilot;
    }
}
const airplane = new Airplane('A380', 'John');
console.log(airplane);
