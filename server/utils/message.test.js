/*jshint esversion: 6 */

var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'William';
    var text = 'Message text';
    var messageObject = generateMessage(from, text);
    expect(messageObject.from).toBe(from);
    expect(messageObject.text).toBe(text);
    expect(messageObject.createdAt).toBeA('number');

  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Admin';
    var lat = 30;
    var lon = -97;
    var locationMessage = generateLocationMessage(from, lat, lon);
    expect(locationMessage.from).toBe('Admin');
    expect(locationMessage.url).toBe('https://www.google.com/maps?q=30,-97');
    expect(locationMessage.createdAt).toBeA('number');
  });
});
