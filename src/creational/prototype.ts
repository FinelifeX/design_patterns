interface Sheep {
  name: string;
  age: number;
}

const dolly: Sheep = {
  name: 'Dolly',
  age: 1,
}

const dollyClone = Object.assign({}, dolly);

console.log('Dolly:', JSON.stringify(dolly));
console.log('Dolly clone:', JSON.stringify(dollyClone));
console.log('Dolly and the clone are equal:', dolly === dollyClone);