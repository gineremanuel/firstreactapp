const UserModel = require('../models/user');
const argon2 = require('argon2');


class UserService {
  constructor() {}

  async createUser(userDTO) {
    const hashedPass = await argon2.hash(userDTO.password);
    let userObj = {
      userName: userDTO.userName,
      firstName: userDTO.firstName,
      lastName: userDTO.lastName,
      password: hashedPass
    };
    const userCreated = await UserModel.create(userObj);
    if(!userCreated) {
      return {
        success: false,
        userCreated: 'Error Creating User'
      };
    }
    const user = userCreated.toObject();
    Reflect.deleteProperty(user, 'password');
    return {
      success: true,
      user
    };
  }
  async  getAllUsers() {
    const users = await UserModel.find().lean();
    return users;
  }
}

module.exports = UserService;