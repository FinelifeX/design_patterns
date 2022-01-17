class Engine {
  power: number;

  constructor(power: number) {
    this.power = power;
  }

  toString(): string {
    return `${this.power}hp`;
  }
}

class Wheel {
  size: number;

  constructor(size: number) {
    this.size = size;
  }

  toString(): string {
    return `${this.size}"`;
  }
}

class Car {
  model = 'Unknown';
  engine: Engine | null = null;
  wheels: Wheel[] = [];

  toString(): string {
    let result = '';

    result += `Model: ${this.model}`;
    result += '\n';
    result += `Engine: ${this.engine?.toString() ?? 'None'}`;
    result += '\n';
    result += 'Wheels: ';
    
    if (this.wheels.length < 1) result += 'None'
    else result += this.wheels.map((item) => item.toString()).join(', ');

    return result;
  }
}

interface ICarBuilder {
  setModel(model: string): void;
  setEngine(engine: Engine): void;
  addWheel(wheel: Wheel): void;
}

class CarBuilder implements ICarBuilder {
  private car!: Car;

  constructor() {
    this.reset();
  }

  reset() {
    this.car = new Car();
  }

  setModel(model: string): void {
    this.car.model = model;
  }

  setEngine(engine: Engine): void {
    this.car.engine = engine;
  }

  addWheel(wheel: Wheel): void {
    this.car.wheels.push(wheel);
  }

  getResult(): Car {
    const result = this.car;

    this.reset();

    return result;
  }
}

class CarBuildDirector {
  private builder: CarBuilder;

  constructor(builder: CarBuilder) {
    this.builder = builder;
  }

  buildSportsCar(): Car {
    this.builder.setModel('Sports Car Mark 1');
    this.builder.setEngine(new Engine(500));

    new Array(4).fill(21).forEach(item => this.builder.addWheel(new Wheel(item)));

    return this.builder.getResult();
  }

  buildFamilyCar(): Car {
    this.builder.setModel('Family Car Mark 1');
    this.builder.setEngine(new Engine(95));

    new Array(4).fill(17).map(item => this.builder.addWheel(new Wheel(item)));

    return this.builder.getResult();
  }
}

const carBuilder = new CarBuildDirector(new CarBuilder());

const sportsCar = carBuilder.buildSportsCar();
console.log(sportsCar.toString());

console.log();

const familyCar = carBuilder.buildFamilyCar();
console.log(familyCar.toString());