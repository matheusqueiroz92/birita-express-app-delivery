const md5 = require('md5');
const LoginSchema = require('./validations/schemas/LoginSchema');
const { mapError, tokenGenerate } = require('../utils/errorMap');
const { User } = require('../database/models');

const login = async (email, password) => {
    const { error } = LoginSchema.validate({ email, password });
    
    if (error) {
      const err = mapError(error.message);
      return err;
    }

    const user = await User.findOne({ where: { email }, raw: true });
    
    if (!user) return mapError('Usuário ou senha inválido');

    if (md5(password) !== user.password) return mapError('Usuário ou senha inválido');

    delete user.password;
    
    const token = tokenGenerate({ sub: user.id });
    return { name: user.name, email: user.email, role: user.role, token };
};

module.exports = { login };
