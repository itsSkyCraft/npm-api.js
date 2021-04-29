const Npm = require('./index');

(async () => {
    const results = await Npm.SearchPackage('enquirer')

    console.log(results)
})();