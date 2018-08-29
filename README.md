![cf](http://i.imgur.com/7v5ASc8.png) 35: Cookies / Local Persistence [![Build Status](https://travis-ci.com/GitHubMaxwell/35-cookies-persistence.svg?branch=master)](https://travis-ci.com/GitHubMaxwell/35-cookies-persistence)
===
## Link
 * Github PR: https://github.com/GitHubMaxwell/35-cookies-persistence/pull/1
 * Travis: https://travis-ci.com/GitHubMaxwell/35-cookies-persistence

## Instructions
* clone fork repo
* install dependencies at root lab directory level AND from within the `backend` directory (cd /backend) both with `npm i`
* in one terminal window navigate to the /backend directory and run `mongod` and then in another window but still within /backend, run `npm run watch`
* within the root level lab folder directory, run `npm start` and you will be navigated to the google chrome window with the app running
* enter information and press `Submit` to test Sign in and you can see the result in the google dev tools console (the JWT)
* not entering info in all three fields for Sign Up or the correct information in the Log In form will result in a error alert (inputs ARE case-sensitive)