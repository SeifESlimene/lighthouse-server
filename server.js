const {createServer} = require('@lhci/server');

console.log('Starting server...');
createServer({
  port: process.env.PORT || 1337,
  storage: {
    storageMethod: 'sql',
    sqlDialect: 'sqlite',
    sqlDatabasePath: './db.sql',
  },
}).then(({port}) => console.log('LHCI listening on port', port));
