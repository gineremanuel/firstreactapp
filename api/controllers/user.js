const UserService = require('../../services/user');


module.exports = {
  
  async createUser(req, res) {
    try {
      const userDTO = req.body;
      const userService = new UserService();
      const { success, reason, user} = await userService.createUser(userDTO);
      if(!success) {
        return res.status(422).json({message: reason});
      }
      return res.status(200).json(user);
    }catch(e) {
      return res.status(500).json(e);
    }
  },
  async getAllUsers(req, res) {
    try {
      const userService = new UserService();
      const result = await userService.getAllUsers();
      return res.status(200).json(result);
    }catch(e) {
      return res.status(500).json(e);
    }
  },
}
