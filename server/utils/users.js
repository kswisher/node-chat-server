
class Users {
  constructor() {
    this.users = [];
  }
  addUser(id, name, room){
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser(id){
    // return the user that was deleted
    var userRemoved = this.users.filter((user) => user.id === id)[0];
    if (userRemoved) {
      // create the new array without the removed user
      var newUsers = this.users.filter((user) => user.id !== id);
      this.users = newUsers;
    };

    return userRemoved;
  }
  getUser(id){
    return this.users.filter((user) => user.id === id)[0];
  }
  getUserList(room){
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);

    return namesArray;
  }
}

module.exports = {Users};
