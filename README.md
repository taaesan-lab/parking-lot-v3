nest create parking-lot-v3  
npm install --save @nestjs/typeorm typeorm sqlite3

nest g module parking-lots  
nest g controller parking-lots  
nest g service parking-lots

nest g module parking-floors  
nest g controller parking-floors  
nest g service parking-floors

# Migration

`npm run migration:generate -- db/migrations/Init`  
`npm run migration:run` - Run the migration
