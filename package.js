Package.describe({
  summary: "Spy on your applications' Mongo queries",
  version: "1.2.0",
  git: "https://github.com/dburles/meteor-mongo-spy.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.use(['mongo', 'underscore'], 'server');
  api.addFiles('mongo-spy.js', 'server');
  api.export('MongoSpy', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mongo-spy');
  api.addFiles('mongo-spy-tests.js');
});
