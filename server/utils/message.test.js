var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should create a valid message object', () => {
    var from = 'testFrom';
    var text = 'testText';
    var testMessage = generateMessage(from, text);
    expect(testMessage.from).toBe(from);
    expect(testMessage.text).toBe(text);
    expect(testMessage.createdAt).toBeGreaterThan(0);

  });
});
