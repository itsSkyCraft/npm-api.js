const fetch = require('node-fetch');

class NpmApi{
    /**
     * 
     * @param {String} name - A Valid Npm Package Name
     * @param {String} keyword - A Valid Keyword
     * @param {String} username - A Valid Npm User
     * @param {String} total - A Valid Total oF NPM Package You Want to fetch (optional)
     * @param {Boolean} readme - Display ReadME.MD
     * @param {Object} opts - A Valid options
     */
    static SearchPackage(name, total){
        if(!name || typeof name !== 'string') throw new TypeError('Please Provide an Npm Package Name!!');

        const Replaced = name.split(' ').join('%20');

        if(!total) total = 5

        return fetch(`https://api.npms.io/v2/search?q=${Replaced}`).then(res => res.json()).then(result => {
            const fixed = result.results.slice(0, total);

            return fixed
        }).catch(err => {return null})
    }
    static getPackage(name, opts={readme: false}){
        if(!name || typeof name !== 'string') throw new TypeError('Please Provide an Npm Package Name!!');

        const Replaced = name.split(' ').join('%20');

        return fetch(`https://api.npms.io/v2/package/${Replaced}`).then(res => res.json()).then(result => {
            if(opts){
                if(opts.readme === true){
                    return result
                }else{
                    const fixed = result
    
                    delete fixed.collected.metadata.readme
        
                    return fixed
                }
            }else{
                const fixed = result
    
                delete fixed.collected.metadata.readme
    
                return fixed
            }
        }).catch(err => {return null})
    }
}

module.exports = NpmApi