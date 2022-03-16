# AngularUniversalCrud

Step by step practical guide on building an Angular Universal CRUD (Create, Read, Update, Delete)operation web application with MongoDB Server-side Rendering (SSR).

## Written Article
[Build Angular 13 Universal CRUD App with MongoDB SSR](https://www.positronx.io/build-angular-universal-crud-app-with-mongodb-server-side-rendering/)


## Run Angular Universal Project
* Git clone
* Run `npm install`
* Open terminal and run `mongod` to start MongoDB database
* Open another terminal and run `npm run build:ssr && npm run serve:ssr`

## List of Express APIs
* POST `/api/create-song`
* GET  `/api/get-songs`
* GET `/api/get-song/:id`
* PUT `/api/update-song/:id`
* DELETE `/api/delete-song/:id`
