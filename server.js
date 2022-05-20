const fastify = require('fastify')({
  logger: true
})

fastify.register(require('./preprocess'))
fastify.register(require('./postprocess'))

fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})
