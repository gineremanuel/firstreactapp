const UserModel = require('../models/user');


class UserService {
  constructor() {}

  async createUser(userDTO) {
    let userObj = {
      userName: userDTO.username,
      password: userDTO.password,
      firstName: userDTO.firstName,
      lastName: userDTO.lastName
    }
    const user = await UserModel.create(userObj)
    if(!userObj) {
      return {
        success: false,
        reason: 'Error Creating User'
      }
    }
    return {
      success: true,
      user
    }
  }
}

module.exports = UserService