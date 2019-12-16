const Authenticationcontroller = require('./controllers/AuthenticationController')
const AuthenticationcontrollerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationcontrollerPolicy.register,
    Authenticationcontroller.register)
  app.post('/login',
    Authenticationcontroller.login)
  app.get('/songs',
    SongsController.index)
  app.get('/songs/:songId',
    SongsController.show)
  app.post('/songs',
    SongsController.post)
}
