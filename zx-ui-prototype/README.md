# Slickgrid

This Project refers to POC for slickgrid, MAP API's, IndexedDB implementation, Background fetch/sync/periodic background Sync browser api's 

## Installation

1. clone the Repo.
2. Run `npm install`

## Backend service Installation

1. install json-server using `npm i json-server -g` (-g to install it globally)
2. where every you json file is run cmd/powershell and run `json-server --watch .\yourFilename.json`
3. this with create a fake backend service at  http://localhost:3000/data

## Development server
Run npm install -g @angular/cli (if Angular Cli not already installed)
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod --aot` flag for a production build.

If using Docker run `npm run build-prod` and to deploy the container run `npm run docker-deploy`
this will create a container and deploy in the docker. 



## App Routes 

`http://localhost:4200/gmap` this loads by default and works with google map.
`http://localhost:4200/ttmap` this loads by default and works with tomtom map.


## how to load HTTP server
install json server `npm i json-server -g` and go to the fole root and run cmd/powershell/gitbash and run command   `json-server ./data.json`

to enable hotloading / to refresh changes made in json file you need to add `--watch` flag to run command.