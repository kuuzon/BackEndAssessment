const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

class CoursesService {
    constructor(datafile){
        this.datafile = datafile;
    }

    async getData(){
        const data = await readFile(this.datafile, 'utf8')
        
        if(!data) {
            return [];
        }

        return JSON.parse(data).courses

    }

    //FUNCTION 1: Retrieve data array & output in specific manner



    //FUNCTION 2: Retrieve data to match specific user request



    //FUNCTION 3: Retrieve nested array data (courses & notes data)
    



}