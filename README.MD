## Production run

`docker-compose up --build`

## Prodution Migrtion

`docker exec -it parking-lot-api printenv`

Run the db migraiton
`docker exec -it parking-lot-api npm run migration:run`
