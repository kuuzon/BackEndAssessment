const express = require ('express');
const router = express.Router();

module.exports = (param) => {
    
    const { coursesService } = param;
    
    router.get('/', async(req, res) => {

        const coursesList = await coursesService.getListSmall();
        return res.render('courses', {page: 'Supported Courses', coursesList})
    })

    router.get('/:university', (req, res)=>{
        return res.render('coursesdetails')
    })

    return router
}
