var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  it('should create a valid location message', () => {
    var lat = 50;
    var long = 30;
    var user = 'ME';
    var url = `https://www.google.com/maps?q=${lat},${long}`;
    var testMessage = generateLocationMessage(user,lat,long);
    expect(testMessage.from).toBe(user);
    expect(testMessage.url).toBe(url);
    expect(testMessage.createdAt).toBeGreaterThan(0);
  });
});
