Mongo Spy
================

A simple *development only* package to spy on your applications' server side queries.


# Installation

Add the package to your application by running `meteor add dburles:mongo-spy`


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
