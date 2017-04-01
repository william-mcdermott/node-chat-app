/*jshint esversion: 6 */

const expect = require('expect');
const {isRealString} = require('./validation.js');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var value = 125;
    expect(isRealString(value)).toBe(false);
  });
  it('should reject string with only spaces', () => {
    var value = '     ';
    expect(isRealString(value)).toBe(false);
  });
  it('should allow string with non-space characters', () => {
    var value = 'D';
    expect(isRealString(value)).toBe(true);
  });
});
