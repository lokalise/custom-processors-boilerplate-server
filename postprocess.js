async function routes (fastify, options) {
  fastify.post('/postprocess', async (request, reply) => {
    if (!request.body) {
      return { "error" : "Invalid request: Missing body"};
    }

    // Get the payload from the request:
    const payload = request.body;

    // @todo: validation

    // @todo: introduce timeout

    // Iterate over the keys, and process them one by one:
    for (const [key, value] of Object.entries(payload.collection.keys)) {
      payload.collection.keys.key = value
    }

    // @todo: validate processed values

    // Return the processed payload:
    return payload;
  })
}

module.exports = routes
