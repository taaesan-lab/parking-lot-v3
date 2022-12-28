import { DataSource, DataSourceOptions } from 'typeorm';
export let dataSourceOptions: DataSourceOptions = {
  type: 'sqlite',
  database: 'db/db.sqlite',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
  logging: true,
};

console.log('process.env.NODE_ENV: ' + process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {
  dataSourceOptions = {
    type: 'postgres',
    host: process.env.PGHOST,
    port: +process.env.PGPORT,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js'],
    logging: true,
  };
}

console.log(dataSourceOptions);

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
