/*jshint esversion: 6 */

var expect = require('expect');
var {generateMessage} = require('./message');

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
