const express = require('express');

const coursesRoutes = require ('./courses');
const feedbackRoutes = require ('./feedback');

const router = express.Router();

module.exports = (param)=> {
    
    const { coursesService } = param;
    
    router.get('/', async(req, res, next) => {
        
        const coursesList = await coursesService.getList()
        
        return res.render('index', {page: 'home', coursesList})
    })

    router.use('/courses', coursesRoutes(param));

    router.use('/feedback', feedbackRoutes(param));

    return router
}
