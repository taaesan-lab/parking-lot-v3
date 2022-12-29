## Architecture

![Architecture](./assets/Architecture.jpg)

## ER Diagram

![ER](./assets/ER.jpg)

`nest create parking-lot-v3`  
`npm install --save @nestjs/typeorm typeorm sqlite3 pg`  
`npm install class-validator class-transformer`

## Modules

`nest g module parking-lots`  
`nest g controller parking-lots`
`nest g service parking-lots`

`nest g module parking-floors`  
`nest g controller parking-floors`  
`nest g service parking-floors`

`nest g module parking-slots`  
`nest g controller parking-slots`  
`nest g service parking-slots`

`nest g module vehicle-type`  
`nest g controller vehicle-type`  
`nest g service vehicle-type`

`nest g module vehicle`  
`nest g controller vehicle`  
`nest g service vehicle`

`nest g module ticket`  
`nest g controller ticket`  
`nest g service ticket`

# Migration

Create schema migration  
`npm run migration:generate -- db/development/migrations/SQLiteInit`

Create an empty migration, for master data insertion  
`npm run migration:create db/development/migrations/MasterData`

Execute the migration  
`npm run migration:run`

## APIs

Create a new parking lot  
[Rest: Create a parking lot](./src/parking-lots/_rest.parking-lots.http)

Get avaliable parking slot  
[Rest: Get avaliable slot](./src/parking-slots/_rest.parking-slots.http)
