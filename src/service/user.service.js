const User = require('../model/user.model')

class UserService {
  async createUser(username, password) {
    const res = await User.create({username, password})
    return res.dataValues
  }
}

module.exports = new UserService()
