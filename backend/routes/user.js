const { loginUser, registerUser } = require('../controllers/user');

module.exports = function Route(fastify, _, done) {
  fastify.post('/login', loginUser);
  fastify.post('/register', registerUser);

  done();
};
