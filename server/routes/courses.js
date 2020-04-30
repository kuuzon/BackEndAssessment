const express = require ('express');
const router = express.Router();

module.exports = (param) => {
    
    const { coursesService } = param;
    
    router.get('/', async(req, res, next) => {

        const coursesList = await coursesService.getListSmall();
        return res.render('courses', {page: 'Supported Courses', coursesList})
    })

    router.get('/:uni', async(req, res, next)=>{
        try{
            const promises = []

            promises.push(coursesService.getUniCourses(req.params.uni));  
            promises.push(coursesService.getNotesForUni(req.params.uni));
            const result = await Promise.all(promises);

            return res.render('coursesdetails', {page: req.params.uni, courses: result[0], notes: result[1]})
        }catch (err) {
            return next (err)
        }
    })

    return router
}
