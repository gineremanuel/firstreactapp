const UserService = require('../../services/user');


module.exports = {
  async createUser(req, res) {
    try {
      const body = req.body;
      const userDTO = {
        userName: body.username,
        password: body.password,
        firstName: body.firstName,
        lastName: body.lastName
      }
      const userService = new UserService();
      const { success, reason, result} = userService.createUser(userDTO);
      if(!success) {
        return res.status(422).json({message: reason});
      }
      return res.status(200).json(result);
    }catch(e) {
      return res.status(500).json(e);
    }
  },
}