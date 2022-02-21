class UserController {
  async register(ctx, next) {
    ctx.body = 'register success'
  }
  async login(ctx, next) {
    ctx.body = 'login success'
  }
}

module.exports = new UserController()
