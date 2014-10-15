Mongo Spy
================

A simple *development only* package to spy on your applications' server side queries.

# Usage

By default all query methods will be watched. For more control we can use `MongoSpy.options` to specify which methods we wish to spy on.

Example:
```
if (Meteor.isServer) {
  // Only watch find and findOne
  MongoSpy.options = {
    find: true,
    findOne: true
  };
}
```

# License

MIT
