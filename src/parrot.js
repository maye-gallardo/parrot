/*export const PARROT_TYPES = {
    EUROPEAN:       'EUROPEAN',
    AFRICAN:        'AFRICAN',
    NORWEGIAN_BLUE: 'NORWEGIAN_BLUE',
};*/

export class Parrot {
    constructor(attributes) {
        this.attributes = attributes;
        this.getSpeed = new CalculatorSpeed(attributes).getRightCalculatorSpeed();
    }
}

export class CalculatorSpeed {
    constructor(attributes) {
        this.attributes = attributes;
    }
    
    getRightCalculatorSpeed(){
        const { voltage, isNailed, numberOfCoconuts } = this.attributes;
        switch(true){
            case 1:
                return new NorwegianBlue(voltage, isNailed).getSpeed;
            case 2:
                return new African(numberOfCoconuts).getSpeed;
            default:
                return new European().getSpeed;
        }
    }
}
class NorwegianBlue {
    constructor(voltage, isNailed){
        this.voltage = voltage;
        this.isNailed = isNailed;
        this.baseSpeed = 12;
        this.getSpeed = this.getSpeedForNorwegianBlue.bind(this);
    }
    getSpeedForNorwegianBlue(){
        return (this.isNailed) ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
    }
    getBaseSpeedWithVoltage(voltage) {
        return Math.min(24, voltage * this.baseSpeed);
    }

}
class African {
    constructor(numberOfCoconuts){
        this.numberOfCoconuts = numberOfCoconuts;
        this.baseSpeed = 12;
        this.loadFactor = 9;
        this.getSpeed = this.getSpeedForAfrican.bind(this);
    }
    getSpeedForAfrican(){
        return Math.max(0, this.baseSpeed - this.loadFactor * this.numberOfCoconuts);
    }
}
class European {
    constructor(){
        this.baseSpeed = 12;
        this.getSpeed = this.getSpeedForEuropean.bind(this);
    }
    getSpeedForEuropean(){
        return this.baseSpeed;
    }
}