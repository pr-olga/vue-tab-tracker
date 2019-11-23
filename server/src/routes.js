const Authenticationcontroller = require('./controllers/AuthenticationController')
const AuthenticationcontrollerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
    app.post('/register',
        AuthenticationcontrollerPolicy.register,
        Authenticationcontroller.register)
}
