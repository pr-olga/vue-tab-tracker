const Authenticationcontroller = require('./controllers/AuthenticationController')

module.exports = (app) => {
    app.post('/register',
        Authenticationcontroller.register)
}
