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
    async getUnis(){
        const data = await this.getData();
        return data.map((courses) => {
            return{
                uni: courses.uni,
                uni_shortname: courses.uni_shortname,
                uni_logo: courses.uni_logo
            }
        })
    }

    async getUnisSmall(){
        const data = await this.getData();
        return data.map((courses) => {
            return{
                uni: courses.uni,
                uni_shortname: courses.uni_shortname,
                uni_logo_small: courses.uni_logo_small
            }
        })
    }
    
    async getList(){
        const data = await this.getData();
        return data.map((courses) => {
            return{
                uni: courses.uni,
                uni_shortname: courses.uni_shortname,
                uni_logo: courses.uni_logo,
                coursenames: courses.coursenames,
            }
        })
    }

    async getListSmall(){
        const data = await this.getData();
        return data.map((courses) => {
            return{
                uni: courses.uni,
                uni_shortname: courses.uni_shortname,
                uni_logo_small: courses.uni_logo_small,
                coursenames: courses.coursenames
            }
        })
    }

    //FUNCTION 2: Retrieve data to match specific user request 
    //QUERY: (DO I NEED BOTH OR JUST ONE?)
    async getUniCourses(uni_shortname){
        const data = await this.getData();
        const courses = data.find((courses) => {
            return courses.uni_shortname === uni_shortname
        })
        if(!courses) {
            null
        }
        return {
            uni: courses.uni,
            uni_logo: courses.uni_logo,
            uni_logo_small: courses.uni_logo_small,
            coursenames: courses.coursenames
        }
    }

    async getNotesForUni(uni_shortname){
        const data = await this.getData();
        const courses = data.find((courses) => {
            return courses.uni_shortname === uni_shortname
        })
        if(!courses || !courses.notes) {
            return null
        }
        return courses.notes
    }

    //FUNCTION 3: Retrieve nested array data (courses & notes data)
    
    async getCoursenames(){
        const data = await this.getData()
        const coursenames = data.map((courses) => {
            return courses.coursenames
        })

        var allCoursenames = []
        coursenames.forEach(function(element){
            allCoursenames.push(...element)
        })

        return allCoursenames;

    } 
    
    async getNotes(){
        const data = await this.getData()
        const notes = data.map((courses) => {
            return courses.notes
        })

        var allNotes = []
        notes.forEach(function(element){
            allNotes.push(...element)
        })

        return allNotes;

    } 
    //Possible error (More complex JSON array)
}

module.exports = CoursesService