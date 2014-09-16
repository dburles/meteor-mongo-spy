var log = function(type, collection, options) {
  console.log('mongo-spy: ' + type + ' ' + collection);
  console.log(JSON.stringify(options, true, 2));
};

_.each(['update', 'upsert'], function(type) {
  Mongo.Collection.prototype[type] = (function(proto) {
    return function(selector, modifier, options) {
      log(type, this._name, {
        selector: selector,
        modifier: modifier,
        options: options
      });

      return proto.apply(this, arguments);
    };
  }(Mongo.Collection.prototype[type]));
});

Mongo.Collection.prototype.insert = (function(proto) {
  return function(doc) {
    log('insert', this._name, {
      doc: doc
    });

    return proto.apply(this, arguments);
  };
}(Mongo.Collection.prototype.insert));

Mongo.Collection.prototype.remove = (function(proto) {
  return function(selector) {
    log('remove', this._name, {
      selector: selector
    });

    return proto.apply(this, arguments);
  };
}(Mongo.Collection.prototype.remove));

Mongo.Collection.prototype.find = (function(proto) {
  return function(selector, options) {
    log('find', this._name, {
      selector: selector,
      options: options
    });

    return proto.apply(this, arguments);
  };
}(Mongo.Collection.prototype.find));

Mongo.Collection.prototype.findOne = (function(proto) {
  return function(selector, options) {
    log('findOne', this._name, {
      selector: selector,
      options: options
    });

    return proto.apply(this, arguments);
  };
}(Mongo.Collection.prototype.findOne));