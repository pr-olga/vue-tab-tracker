# vue-tab-tracker
A Vue.js/Express.js web application inspired by freeCodeCamp.org
https://youtu.be/Fa4cRMaTDUI

## Preliminary Tutorial
by LearnCode.academy https://youtu.be/mZY1yyrlJWU

## Part 1

### Client
```
# Installation
npm i -g vue-cli
vue list
vue init webpack client
cd client
npm i && npm run dev
npm install --save axios # library doing http Request to backend
```

- 37:00 basics post method on client with _axios_
- 44:00 UI for client
- 49:35 `v-model`: directive to create two-way data bindings on form input, textarea, and select elements
- 50:00  properties `watch` & `mounted`
- 53:00 event listener `@click` and method `register`

### Server
```
# Installations
npm init -f
npm i --save -D nodemon eslint
npm install express body-parser cors morgan # Dependencies to create express applictions
```

- 27:30 create post request with express

## Part 2
### Client
- include vuetify replaced by include bootsrap-vue
- 33:20 set up ui for errors
- 38:00 style to FE, include vuetify

### Server
- `npm install --save sequelize sqlite303.1.8`
- Sequelize is ORM used to connecting to dbs
- sqlite is a local instans of db
- install @hapi/joi
	- https://github.com/hapijs/joi
	- https://github.com/hapijs/joi/blob/master/API.md


- add sequelize
- add config
- add routes
- 06:23 create model
- import fs module (filesystem)
- 14:30  result of sqlize
- 16:20 include Controller
- 18:45 implement Logic for registration
- 23:15 include joi (_deprecated_)
- 25:00 expresse middleware `AuthenticationControllerPolicy`

## Part 3: Login
### Client
- 24:00 implement login
- 49:00 install vuex
	1. state
	2. mutations
	3. actions
- To change the state you must invoke the mutations,
in order to invoke the mutations you must invoke the actions.

### Server
- 26:02 implement login on server
- 32:35 install jsonwebtoken
- 35:20 encrypt password

## Part 4: Songs
- add create songs services to server and to client

## Part 5: View and Edit Song
- 06:10 show single song on Server
- bug in tutorial: `findById -> deprecated (findByPk)`
- 21:45 divide Viewsong in Folder
- 41:15 Edit Song
