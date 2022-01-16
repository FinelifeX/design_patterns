enum BallTypes {
  Football = 'football',
  Basketball = 'basketball',
}

abstract class Ball {
  abstract interact(): void;
}

class BasketballBall extends Ball {
  interact() {
    console.log('You have bounced the ball!');
  }
}

class FootballBall extends Ball {
  interact() {
    console.log('You have kicked the ball!');
  }
}

class BallFactory {
  static createBall(type: BallTypes): Ball {
    switch (type) {
      case BallTypes.Football:
        return new FootballBall();
      case BallTypes.Basketball:
        return new BasketballBall();
      default:
        throw 'Invalid type';
    }
  }
}

const basketballBall = BallFactory.createBall(BallTypes.Basketball);
const footballBall = BallFactory.createBall(BallTypes.Football);

console.log(basketballBall.interact());
console.log(footballBall.interact());