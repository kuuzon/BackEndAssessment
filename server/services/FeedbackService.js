const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class FeedbackService {
    constructor(datafile){
        this.datafile = datafile;
    }

    //Live updating function
    async addEntry(name, title, message){
        const data = await this.getData();
        //console.log(data);
        data.unshift({name, title, message});
        return writeFile(this.datafile, JSON.stringify(data));
    }

    //Passing in feedback.json data function
    async getData(){
        const data = await readFile(this.datafile, 'utf8')
        if(!data) return [];
        return JSON.parse(data);
    }

    //Function to retrieve feedback data
    async getList(){
        const data = await this.getData();
        return data;
    }

}

module.exports = FeedbackService