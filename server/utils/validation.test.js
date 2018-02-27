const expect = require('expect');

const {isRealString} = require('./validation');

describe('Validation.js tests', () => {
  it('should reject non string values', () => {
    var result = null;
    result = isRealString(1);
    expect(result).toBe(false);
  });
  it('should reject strings with only spaces', () => {
    var result = null;
    result = isRealString('    ');
    expect(result).toBe(false);
  });
  it('should allow strings with non space characters', () => {
    var result = null;
    result = isRealString('blah');
    expect(result).toBe(true);
  });
});
