const config = {
  development: {
    client: 'pg',  // Utilisation de PostgreSQL
    connection: {
      database: 'my_dev_db',
      user: 'postgres',
      password: 'mypassword',
      host: "5.250.179.99", // Ajoutez l'hôte si nécessaire
      port: 5432 // Ajoutez le port si nécessaire
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './src/seeds'
    }
  },

  staging: {  // Configuration de l'environnement de staging 
    client: 'pg',
    connection: {
      database: 'my_dev_db',
      user: 'postgres',
      password: 'mypassword'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations'
    }
  },

  production: { // Configuration de l'environnement de production
    client: 'pg',
    connection: {
      database: 'my_dev_db',
      user: 'postgres',
      password: 'mypassword',
      host: "5.250.179.99", // Ajoutez l'hôte si nécessaire
      port: 5432 // Ajoutez le port si nécessaire
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations'
    }
  }
};


module.exports = config;
// export default config;
