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