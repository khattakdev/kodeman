const { downloadProject } = require('../controllers/download');

module.exports = function Route(fastify, _, done) {
  fastify.post('/', downloadProject);

  done();
};
