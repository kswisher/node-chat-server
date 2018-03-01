const expect = require('expect');

const {Users} = require('./users');

describe('Users:', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Bob',
      room: 'React Course'
    },{
      id: '3',
      name: 'Molly',
      room: 'Node Course'
    }]
  });

  it('should add a new user', () => {
    var users = new Users();
    var user = {
      id: '124',
      name: 'Ken',
      room: 'mustang'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should return users for Node Course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike','Molly']);
  });

  it('should return users for React Course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Bob']);
  });

  it('should remove a user', () => {
    var removeUser = users.removeUser('3');
    expect(removeUser.name).toBe('Molly');
  });

  it('should not remove a user', () => {
    var removeUser = users.removeUser('99');
    expect(users.users.length).toBe(3);
  });

  it('should find a user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(userId).toBe(user.id);
  });

  it('should not find a user', () => {
    var findUser = users.getUser('99');

    expect(findUser).toBeFalsey;
  });

});
