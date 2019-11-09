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