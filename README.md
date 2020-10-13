# Happy API


### Leve felicidade para o mundo. Visite orfanatos e mude o dia de muitas crianças.
> Bring happiness to the world. Visit orphanages and change many children's day.


# The application
![home](https://user-images.githubusercontent.com/45128599/95762602-4e12bf80-0c84-11eb-9139-80558d2e9570.png)
![Screenshot from 2020-10-12 12-14-22](https://user-images.githubusercontent.com/45128599/95762791-8fa36a80-0c84-11eb-889f-b2fd41d7d523.png)


## Techs 
- NodeJS
- Typescript
- SQlite3
- TypeORM

## Third party helpers
- express
- multer
- yup

## How to run the project? 

**Clone**
```bash
git clone https://github.com/felipekafuri/happy-api
```
**Va até o diretório** 
```bash
cd happy-api
``` 

**Install the dependencies**
```bash
yarn 
``` 
or
```bash
npm install 
``` 

**Start the project**
```bash
yarn dev
```

> It will start the application on http://localhost:3333 



## Routes

> [GET] **/orphanages/:id** - to get infos about one orphanages

> [GET] **/orphanages** - to get the list of orphanages

> [POST] **/orphanages** - to create an orphanage