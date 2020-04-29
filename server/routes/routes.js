const express = require('express');
const router = express.Router();
const coursesRoutes = require ('./courses');
const feedbackRoutes = require ('./feedback');

const routes = ()=> {
    const {coursesService} = param
    
    router.get('/', (req, res) => {
        const coursesList = await coursesService.getList()
        return res.render('index', {page: 'home', coursesList})
    })

    router.use('/courses', coursesRoutes())

    router.use('/feedback', feedbackRoutes())

    return router
}

module.exports = routes
