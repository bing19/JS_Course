const Joi = require('joi');

module.exports = {
  validateBody: schema => {
      return (req, res, next) => {

          const result = Joi.validate(req.body, schema);

          if(result.error) {
              return res.status(400).json({error: `Неверно запонены поля формы - ${result.error}`});
          }

          if(!req.value) {req.value = {};}

          req.value['body'] = result.value;
          next();
      }
  },

  schemas: {
      userSignUpSchema: Joi.object().keys({
          first_name: Joi.string(),
          last_name: Joi.string(),
          nick_name: Joi.string(),
          phone_number: Joi.string().regex(/^[0-9]{11}$/),
          description: Joi.string(),
          email: Joi.string().email().required(),
          password: Joi.string().regex(/^[A-Za-z0-9]{6,}$/).required(),
          confirm_password: Joi.any().valid(Joi.ref('password')).required(),

      }),
      userSignInSchema: Joi.object().keys({
          email: Joi.string().email().required(),
          password: Joi.string().regex(/^[A-Za-z0-9]{6,}$/).required(),
      }),
      companySchema: Joi.object().keys({
          name: Joi.string().regex(/^[A-Za-z0-9]{1,}$/),
          address: Joi.string().regex(/^[A-Za-z0-9]{1,}$/),
          service_of_activity: Joi.string(),
          number_of_employees: Joi.number().integer(),
          description: Joi.string(),
          create_by_user: Joi.string(),
      }),
  }
};