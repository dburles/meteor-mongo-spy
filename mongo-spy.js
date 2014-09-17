var log = function(type, collection, options) {
  console.log('mongo-spy: ' + type + ' ' + collection);
  console.log(JSON.stringify(options, true, 2));
};

MongoSpy = {};

if (! MongoSpy.options) {
  MongoSpy.options = {
    update: true,
    upsert: true,
    insert: true,
    remove: true,
    find: true,
    findOne: true
  };
}

Meteor.startup(function() {
  console.log('mongo-spy: spying on ' + _.keys(MongoSpy.options).join(", "));
  
  _.each(['update', 'upsert'], function(type) {
    if (MongoSpy.options[type]) {
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
    }
  });

  if (MongoSpy.options.insert) {
    Mongo.Collection.prototype.insert = (function(proto) {
      return function(doc) {
        log('insert', this._name, {
          doc: doc
        });

        return proto.apply(this, arguments);
      };
    }(Mongo.Collection.prototype.insert));
  }

  if (MongoSpy.options.remove) {
    Mongo.Collection.prototype.remove = (function(proto) {
      return function(selector) {
        log('remove', this._name, {
          selector: selector
        });

        return proto.apply(this, arguments);
      };
    }(Mongo.Collection.prototype.remove));
  }

  if (MongoSpy.options.find) {
    Mongo.Collection.prototype.find = (function(proto) {
      return function(selector, options) {
        log('find', this._name, {
          selector: selector,
          options: options
        });

        return proto.apply(this, arguments);
      };
    }(Mongo.Collection.prototype.find));
  }

  if (MongoSpy.options.findOne) {
    Mongo.Collection.prototype.findOne = (function(proto) {
      return function(selector, options) {
        log('findOne', this._name, {
          selector: selector,
          options: options
        });

        return proto.apply(this, arguments);
      };
    }(Mongo.Collection.prototype.findOne));
  }
});