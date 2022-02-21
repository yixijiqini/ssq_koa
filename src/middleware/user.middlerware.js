const { userFormateError } = require('../constant/err.type')
const userValidator = async (ctx, next) => {
  const { username, password } = ctx.request.body
  if (!username || password) {
    ctx.app.emit('error', userFormateError, ctx)
    return
  }
  await next()
}

module.exports = {
  userValidator
}
