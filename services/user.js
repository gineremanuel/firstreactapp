const UserModel = require('../models/user');


class UserService {
  constructor() {}

  async createUser(userDTO) {
    let userObj = {
      userName: userDTO.userName,
      password: userDTO.password,
      firstName: userDTO.firstName,
      lastName: userDTO.lastName
    }
    const userCreated = await UserModel.create(userObj)
    if(!userCreated) {
      return {
        success: false,
        userCreated: 'Error Creating User'
      }
    }
    return {
      success: true,
      userCreated
    }
  }
  async getAllUsers() {
    const users = await UserModel.find().lean()
    return users
  }
}

module.exports = UserService