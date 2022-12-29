![ER](./assets/ER.jpg)

nest create parking-lot-v3  
npm install --save @nestjs/typeorm typeorm sqlite3

nest g module parking-lots  
nest g controller parking-lots  
nest g service parking-lots

nest g module parking-floors  
nest g controller parking-floors  
nest g service parking-floors

nest g module parking-slots  
nest g controller parking-slots  
nest g service parking-slots

nest g module vehicle-type  
nest g controller vehicle-type  
nest g service vehicle-type

# Migration

Create schema migration
`npm run migration:generate -- db/development/migrations/Init`  
`npm run migration:run` - Run the migration

Create an empty migration, for master data purpose  
`npm run migration:create db/development/migrations/MasterData`

# Class-Validator & Class-Transformer

`npm install class-validator class-transformer`

## Create a parking lot

[Rest: Create a parking lot](./src/parking-lots/_rest.parking-lots.http)

[Rest: Get avaliable slot](./src/parking-slots/_rest.parking-slots.http)
