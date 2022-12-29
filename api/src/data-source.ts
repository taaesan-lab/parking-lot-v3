import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

console.log('process.env.NODE_ENV: ' + process.env.NODE_ENV);
if (
  process.env.NODE_ENV === undefined ||
  (process.env.NODE_ENV !== 'production' &&
    process.env.NODE_ENV !== 'development')
) {
  console.error('Please provide valid value for NODE_ENV');
  process.exit(1);
}

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
    namingStrategy: new SnakeNamingStrategy(),
  };
} else if (process.env.NODE_ENV === 'development') {
  dataSourceOptions = {
    type: 'sqlite',
    database: 'db/development.sqlite',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/development/migrations/*.js'],
    logging: true,
    namingStrategy: new SnakeNamingStrategy(),
  };
}

console.log(dataSourceOptions);

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
