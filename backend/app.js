const fastify = require('fastify')({
  logger: true,
});

fastify.get('/', async (request, reply) => {
  reply.type('application/json').code(200);
  return { hello: 'world' };
});

fastify.listen(3001, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server started at ${address}`);
});
