const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

class PersonalisedService {
    constructor(datafile) {
        this.datafile = datafile;
    }

    //Passing in users.json data function
    async getData(){
        const data = await readFile(this.datafile, 'utf8')
        if(!data) return [];
        return JSON.parse(data);
    }

    //Method to retrieve user data
    async getList(){
        const data = await this.getData();
        return data;
    }

    //Method that reads users shortname (Alex Bicknell) & returns ONLY their favourited university (if there is one)
    async getUsersFavouriteUni() {
        const data = await this.getData();
        const user = data.users.find((user) => {
            return user.shortname === 'Alex_Bicknell';  //Work around: No login / user definition functions on the site
        });

        if(!user || !user.mostviewedUni) return null;
        return user.mostviewedUni;
    }
}

module.exports = PersonalisedService