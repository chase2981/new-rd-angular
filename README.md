# angular-lib-tester

This project's purpose is to provide a convenient, quick, and easy-to-understand angular-lib structure from which you can begin to develop and test your own new ./angular-lib. 

This project was built using @angular@5.1.0 and @angular/cli@1.6.0, both of which are strongly geared towards ahead-of-time compilation.



## Getting Started
First things first, clone the repo: 
In a new terminal, execute the following statement to clone the repo: 
`git clone git@github.com:chase2981/angular-lib-tester.git`

Next, install the dependencies: (Don't forget to `cd ./angular-lib-tester` first..)

Run `npm i` to install the dependencies.

While those are installing, feel free to study the angular-lib-tester project's structure and how the ./angular-lib sub-project is setup in particular; afterall, building out an idealistic angular-lib starter project is what this is ALL about ;)

- [angular-lib-tester](#angular-lib-tester)
    - [Getting Started](#getting-started)
    - [Angular-lib](#angular-lib)
        - [Build the ./angular-lib](#build-the-angular-lib)
        - [Test the ./angular-lib](#test-the-angular-lib)
    - [Demo Application](#demo-application)
        - [Serving the Demo App](#serving-the-demo-app)
            - [1) Serve using angular-cli's built-in webpack server](#1-serve-using-angular-clis-built-in-webpack-server)
            - [2) Serve using a combination of `ng b` and `liteserver`](#2-serve-using-a-combination-of-ng-b-and-liteserver)
        - [Build the Demo App](#build-the-demo-app)
        - [Test the Demo App](#test-the-demo-app)

** Please Note: You DO NOT have to repeat the `npm i` step within the ./angular-lib directory itself--because its dependencies are installed along with the demo app's dependencies as peerDependencies

## Angular-lib

### Build the ./angular-lib
Run `npm run build-lib`, or else, `./angular-lib/build.sh` in order to rebuild the angular-lib directory's src files into a consumable library (speedy!!!)

### Test the ./angular-lib
Run `npm run test-lib`, or else, `./angular-lib/test.sh` in order to run the tests for the angular-lib itself (super quick!!)

- Please Note: If you are unable to run either of the `npm run (build|test)-lib` commands, then you may need to run `chmod 777 ./angular-lib/build.sh` and/or `chmod 777 ./angular-lib/test.sh`--in order to make each bash script executable prior to executing it

## Demo Application

### Serving the Demo App
There are two ways you can serve the demo app

#### 1) Serve using angular-cli's built-in webpack server
a) Run `ng s` to serve the application using angular-cli server
(http://localhost:4200)

* Please do NOT judge based on styling ;) Please judge based on speed of developmemt + simplicity + ease-of-understanding instead!!!

Running `ng s` will compile the demo application's source code, using angular-cli's built-in webpack server, and it will watch for changes to either the ./angular-lib or the demo application's ./src directory.

#### 2) Serve using a combination of `ng b` and `liteserver`
a) Compile the typescript (`ng b` or `node_modules/.bin/ngc -p ./src/tsconfig.app.json`, etc)
b) `npm run serve` in order to serve the app using lite-server instead; (http://localhost:3000)

### Build the Demo App
Run `ng b` or `npm run build` to build the demo-app. The `npm run serve` command utilizes the build command in order to serve the demo-app content via lite-server

### Test the Demo App
Run `ng test` or `npm test` to test the demo-app


