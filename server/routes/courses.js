const express = require ('express');
const router = express.Router();

module.exports = (param) => {
    
    const { coursesService } = param;
    
    router.get('/', async(req, res, next) => {

        const coursesList = await coursesService.getListSmall();
        return res.render('courses', {page: 'Supported Courses', coursesList})
    })

    router.get('/:university', async(req, res, next)=>{
        try{
            const promises = []

            promises.push(coursesService.getUniCourses(req.params.uni));  //Is this even necessary?
            promises.push(coursesService.getNotesForUni(req.params.uni));
            const result = await Promise.all(promises);

            //THIS NEEDS HELP - CONFUSING
            return res.render('coursesdetails', {page: req.params.uni, uni: result[0], notes: result[1]})
        }catch (err) {
            return next (err)
        }
    })

    return router
}
