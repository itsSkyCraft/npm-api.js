<h1 align="center">npm-api.js</h1>
<hr>
<p align="center">A Package For Searching Npm package And more from npms.io</p>
<br>

# npm-api.js
A Package For Searching Npm package And more from [npms.io](https://npms.io)
## Installation
[![NPM](https://nodei.co/npm/npm-api.js.png)](https://nodei.co/npm/npm-api.js/)
## Getting packages Info
Here is The Basic usage (no readme included)
```js
const NpmApi = require('npm-api.js');

(async () => {
    const results = await NpmApi.getPackage('enquirer');

    console.log(results) // the results are too big
})();
```
To Include The Readme Value, use this method:
```js
const NpmApi = require('npm-api.js');

(async () => {
    const results = await NpmApi.getPackage('enquirer', {readme: true});

    console.log(results) // the results are too big, i cant show it
})();
```
## Searching For Packages
Here is The Basic Usage (5 packages only):
```js
const NpmApi = require('npm-api.js');

(async () => {
    const results = await NpmApi.SearchPackage('enquirer');

    console.log(results) 
})();
```
Custom Fetch:
```js
const NpmApi = require('npm-api.js');

(async () => {
    const results = await NpmApi.SearchPackage('enquirer', 10); // fetch 10 packages, Default is 5

    console.log(results) 
})();
```
### Search Filters
Besides Normal Text, SearchPackage also supports filters. 
- scope:types: Show/filter results that belong to the @types scope
- author:sindresorhus: Show/filter results in which sindresorhus is the author
- maintainer:sindresorhus: Show/filter results in which sindresorhus is qualifier as a maintainer
- keywords:gulpplugin: Show/filter results that have gulpplugin in the keywords
- not:deprecated: Exclude deprecated packages from the results
- not:unstable: Exclude packages whose version is < 1.0.0
- not:insecure: Exclude packages that are insecure or have vulnerable dependencies (as per nsp)
- is:deprecated: Show/filter is deprecated packages
- is:unstable: Show/filter packages whose version is < 1.0.0
- is:insecure: Show/filter packages that are insecure or have vulnerable dependencies (as per nsp)
- boost-exact:false: Do not boost exact matches, defaults to true
- score-effect:14: Set the effect that package scores have for the final search score, defaults to 15.3
- quality-weight:1: Set the weight that quality has for the each package score, defaults to 1.95
- popularity-weight:1: Set the weight that popularity has for the each package score, defaults to 3.3
- maintenance-weight:1: Set the weight that the quality has for the each package score, defaults to 2.05

Example of Search Filter:
```js
const NpmApi = require('npm-api.js');

(async () => {
    const results = await NpmApi.SearchPackage('keywords:inquirer'); // getting the Package that Have the keyword "inquirer"

    console.log(results) 
})();
```
## thanks
Special Thanks to [npms.io](https://npms.io) For making The Api.