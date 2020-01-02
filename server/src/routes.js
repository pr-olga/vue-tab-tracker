const Authenticationcontroller = require('./controllers/AuthenticationController')
const AuthenticationcontrollerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationcontrollerPolicy.register,
    Authenticationcontroller.register)
  app.post('/login',
    Authenticationcontroller.login)
  app.get('/songs',
    SongsController.index)
  app.put('/songs/:songId',
    SongsController.put)
  app.get('/songs/:songId',
    SongsController.show)
  app.post('/songs',
    SongsController.post)

  app.get('/bookmarks',
    BookmarksController.index)
  app.post('/bookmarks',
    BookmarksController.post)
  app.delete('/bookmarks/:bookmarkId',
    BookmarksController.delete)
}
