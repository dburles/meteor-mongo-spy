Package.describe({
  summary: "Spy on your applications' Mongo queries",
  version: "1.2.1",
  git: "https://github.com/dburles/meteor-mongo-spy.git",
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.4');
  api.use(['mongo@1.0.4', 'underscore@1.0.0'], 'server');
  api.addFiles('mongo-spy.js', 'server');
  api.export('MongoSpy', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('dburles:mongo-spy');
  api.addFiles('mongo-spy-tests.js');
});
