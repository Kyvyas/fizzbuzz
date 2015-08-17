describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      expect(game.isDivisibleByThree(3)).toBe(true)
    });
  });

  describe('knows when a number is not', function() {
    it('divisible by 3', function() {
      expect(game.isDivisibleByThree(1)).toBe(false)
    });
  });

  describe('when playing, says', function() {
    it('"Java" when a number is divisible by three', function() {
      expect(game.says(3)).toEqual("Java");
    });

    it('"Buzz" when a number is divisible by five', function() {
      expect(game.says(5)).toEqual("Buzz");
    });

    it('"JavaBuzz" when a number is divisible by fifteen', function() {
      expect(game.says(15)).toEqual("JavaBuzz");
    });
  });

});