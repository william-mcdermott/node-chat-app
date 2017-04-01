/*jshint esversion: 6 */

const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node course'
    }, {
      id: '2',
      name: 'Fionna',
      room: 'React course'
    }, {
      id: '3',
      name: 'Steph',
      room: 'Node course'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'William',
      room: 'Mets Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var id = '2';
    var res = users.removeUser(id);
    expect(res).toNotInclude({
      id: '2',
      name: 'Fionna',
      room: 'React course'
    });
  });

  it('should not remove user', () => {
    var id = 'ewvrevevfdc';
    var res = users.removeUser(id);
    expect(res).toEqual([{
      id: '1',
      name: 'Mike',
      room: 'Node course'
    }, {
      id: '2',
      name: 'Fionna',
      room: 'React course'
    }, {
      id: '3',
      name: 'Steph',
      room: 'Node course'
    }]);
  });

  it('should find user', () => {
    var id = '3';
    var res = users.getUser(id);
    expect(res.id).toEqual(id);
  });

  it('should not find user', () => {
    var id = '99';
    var res = users.getUser(id);
    expect(res).toNotExist();
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node course');

    expect(userList).toEqual(['Mike', 'Steph']);
  });

  it('should return names for react course', () => {
    var userList = users.getUserList('React course');

    expect(userList).toEqual(['Fionna']);
  });
});
