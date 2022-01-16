class Cat {
  name: string;
  color: string;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }

  meow() {
    console.log('Meow!');
  }
}

const cat = new Cat('Alice', 'blue');

cat.meow();