# Max Rogue Web
[![](https://github.com/ajmarmar/mini-rogue-web/workflows/Build/badge.svg)](https://github.com/ajmarmar/mini-rogue-web/actions?query=workflow%3ABuild) [![](https://github.com/ajmarmar/mini-rogue-web/workflows/Tests/badge.svg)](https://github.com/ajmarmar/mini-rogue-web/actions?query=workflow%3ATests) 


Nini Rogue Web is a project for play a Mini Rogue with 

## Prerequisites
1. Install [Node.js](https://nodejs.org) and [MongoDB](https://www.mongodb.com)
2. Install Angular CLI: `npm i -g @angular/cli`
3. From project root folder install all the dependencies: `npm i`

## Run
### Development mode with files watching
`npm run dev`: [concurrently]

A window will automatically open at [localhost:4200](http://localhost:4200). Angular and Express files are being watched. Any change automatically creates a new bundle, restart Express server and reload your browser.

### Production mode
`npm run prod`: run the project with a production bundle listening at [localhost:3000](http://localhost:3000) 

### Manual mode
1. Build frontend: `npm run builddev` for dev or `npm run build` for prod
2. Build backend: `npm run predev`
3. Run MongoDB: `mongod`
4. Run the app: `npm start`

### Docker
1. `sudo docker-compose up`
2. Go to [localhost:3000](http://localhost:3000)

### AWS EC2
1. Create a EC2 Linux machine on AWS
2. Edit the EC2 Security Group and add TCP port `3000` as an Inbound rule for Source `0.0.0.0/0`
3. Clone this repo into the EC2 machine
4. If you use a remote MongoDB instance, edit `.env` file
5. Run `npm ci`
6. Run `npm run build`
7. Run `npm start`
8. The app is now running and listening on port 3000
9. You can now visit the public IP of your AWS EC2 followed by the port, eg: `12.34.56.78:3000`
10. Tip: use [pm2](https://pm2.keymetrics.io/) to run the app instead of `npm start`, eg: `pm2 start dist/server/app.js`

## Running tests
Run `ng test` to execute the frontend unit tests via [Karma](https://karma-runner.github.io).

Run `npm run testbe` to execute the backend tests via [Jest](https://jestjs.io/) (it requires `mongod` already running).

## Running linters
Run `npm run lint` to execute [Angular ESLint](https://github.com/angular-eslint/angular-eslint), [HTML linting](https://github.com/htmlhint/HTMLHint) and [SASS linting](https://github.com/sasstools/sass-lint).
