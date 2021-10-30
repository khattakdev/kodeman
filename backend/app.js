const mongoose = require('mongoose');
require('dotenv').config();
const fastify = require('fastify')({
  logger: true,
});

fastify.get('/', async (request, reply) => {
  reply.type('application/json').code(200);
  return { hello: 'world' };
});

fastify.register(require('fastify-cors'), {
  origin: '*',
  methods: ['POST'],
});
fastify.register(require('./routes/user'), { prefix: 'user' });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    fastify.log.info('Connected To Database');
    fastify.listen(3001, (err, address) => {
      if (err) {
        fastify.log.error(err);
        process.exit(1);
      }
      fastify.log.info(`Server started at ${address}`);
    });
  } catch (err) {
    fastify.log.error(err.message);
    process.exit(1);
  }
};

connectDB();
