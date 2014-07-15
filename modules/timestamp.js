function timestampHandler(schema) {
  schema.add({ created_at: { type: Date, default: Date.now() } });
  schema.add({ updated_at: { type: Date, default: Date.now() } });

  function preSaveHandler(next) {
    var self = this;

    self.updated_at = Date.now();
    next();

    return self; 
  }
  schema.pre('save', preSaveHandler);

  return schema;
}
module.exports = exports = timestampHandler;
