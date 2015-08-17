var Game = function() {};

Game.prototype.isDivisibleByThree = function(number) {
  return this._isDivisibleBy(number, 3);
};

Game.prototype.isDivisibleByFive = function(number) {
  return this._isDivisibleBy(number, 5);
};

Game.prototype.isDivisibleByFifteen = function(number) {
  return this._isDivisibleBy(number, 15);
};

Game.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};

Game.prototype.says = function(number) {
  if (this.isDivisibleByFifteen(number)) {
    return "JavaBuzz";
  }
  if (this.isDivisibleByThree(number)) {
    return "Java";
  }
  if (this.isDivisibleByFive(number)) {
    return "Buzz";
  }
  return number;
};