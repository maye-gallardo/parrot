export const PARROT_TYPES = {
    EUROPEAN:       'EUROPEAN',
    AFRICAN:        'AFRICAN',
    NORWEGIAN_BLUE: 'NORWEGIAN_BLUE',
};

export class Parrot {
    constructor(numberOfCoconuts, voltage, isNailed) {
        this.loadFactor = 9;
        this.baseSpeed = 12;
        this.numberOfCoconuts = numberOfCoconuts;
        this.voltage = voltage;
        this.isNailed = isNailed;
    }

    getSpeed() {
        switch (this.type) {
            
        }
        throw new Error("Should be unreachable");
    }

}

export class African extends Parrot{
    constructor(numberOfCoconuts, voltage, isNailed) {
        super(numberOfCoconuts, voltage, isNailed);
    }

    getSpeed() {
        return Math.max(0, this.baseSpeed - this.loadFactor * this.numberOfCoconuts);
    }
}

export class Norwegian_Blue extends Parrot{
    constructor(numberOfCoconuts, voltage, isNailed) {
        super(numberOfCoconuts, voltage, isNailed);
    }

    getSpeed() {
        return (this.isNailed) ? 0 : this.getBaseSpeedWithVoltage();
    }
    getBaseSpeedWithVoltage() {
        return Math.min(24, this.voltage * this.baseSpeed);
    }
}

export class European extends Parrot{
    constructor(numberOfCoconuts, voltage, isNailed) {
        super(numberOfCoconuts, voltage, isNailed);
    }

    getSpeed() {
        return this.baseSpeed;
    }
}