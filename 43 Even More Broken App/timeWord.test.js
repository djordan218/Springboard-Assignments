const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

describe('AM/PM examples', function () {
  test('PM test', function () {
    const time = timeWord('2:55');
    expect(time).toContain('AM');
  });

  test('PM test', function () {
    const time = timeWord('17:55');
    expect(time).toBe('The time is five fifty five PM');
  });
});
