// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/dev.sqlite'
    },
    migrations: {
      directory: './src/database/migrations',
    },
    useNullAsDefault: true,
}
}