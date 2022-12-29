import { DataSource, DataSourceOptions } from 'typeorm';

console.log('process.env.NODE_ENV: ' + process.env.NODE_ENV);

export let dataSourceOptions: DataSourceOptions;

if (process.env.NODE_ENV === 'production') {
  dataSourceOptions = {
    type: 'postgres',
    host: process.env.PGHOST,
    port: +process.env.PGPORT,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/production/migrations/*.js'],
    logging: true,
  };
} else if (process.env.NODE_ENV === 'development') {
  dataSourceOptions = {
    type: 'sqlite',
    database: 'db/db.sqlite',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/development/migrations/*.js'],
    logging: true,
  };
}

console.log(dataSourceOptions);

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
