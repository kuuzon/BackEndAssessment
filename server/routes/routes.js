const express = require('express');
const router = express.Router();
const coursesRoutes = require ('./courses');
const feedbackRoutes = require ('./feedback');

module.exports = (param)=> {
    
    const { coursesService } = param;
    
    router.get('/', async(req, res) => {
        
        const coursesList = await coursesService.getList()
        return res.render('index', {page: 'home', coursesList})
    })

    router.use('/courses', coursesRoutes(param));

    router.use('/feedback', feedbackRoutes(param));

    return router
}
