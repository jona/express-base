# Express Base
Base for starting an express app

## Setup

1. Clone repo
2. Replace `APP_NAME` with the name of your app through out the repo
3. Run `docker-compose build`
4. Run `docker-compose run app npm install`
5. Run `docker-compose up`

## Docker Compose
Fully dockerized and ready to run on your dev server. See the [docker-compose.yml](/docker-compose.yml) file.

Run this command to start up the docker container
```
docker-compose up
```

### Tests
```
docker-compose run app npm test
```
