# Backend Assessment


## Setup

1. If you do not already have Node.js and npm installed, we recommend using a Node Version Manager, like Volta:
   * [Volta](https://docs.volta.sh/guide/getting-started) - Linux/OSX/Windows
   * [nvm](https://github.com/creationix/nvm) - Linux/OSX
1. Volta will automatically use the correct Node version. If you aren't using it, make sure you have Node.js 18+, with npm 8+, installed.
1. Run `npm i && npm t` to install dependencies run all the tests.
   * It should run the tests, the example test should pass, the other two should fail.
   * `Error: SQLITE_MISUES: not an error` is expected on first run, it's SQLite complaining about being handed an empty string for a query.


## Challenges

* Open `challenges.js` and follow the instructions for each of the listed challenges.
* A set of test cases are in `challenges.test.js` which you can use to check your work and act as a guide for implementation. **You should not need to change the `challenges.test.js` file**
* Each challenge is independent and if you get stuck on one go to the next one.
