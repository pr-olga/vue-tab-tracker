const Joi = require('joi')

module.exports = {
  register(req, res, next) {
    const schema = Joi.object().keys({
      password: Joi.string()
        .regex(
          new RegExp('^[a-zA-Z0-9]{8,30}$')),

      email: Joi.string().email()
    })

    const {error} = Joi.validate(req.body, schema);

    if (error) {
        switch (error.details[0].context.key) {
            case 'email':
                res.status(400).send({
                    error: "You must provide a valid email address"
                })
                break
            case 'password':
                res.status(400).send({
                    error: "The password does not follow the rules"
                })
                break
            default:
                res.status(400).send({
                    error: "Invalid registration information"
            })
        }
    } else {
        next()
    }
  }
}
