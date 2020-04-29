const express = require('express');
const router = express.Router();
const coursesRoutes = require ('./courses');
const feedbackRoutes = require ('./feedback');

const routes = ()=> {
    router.get('/', (req, res)=>{
        return res.render('index')
    })

    router.use('/courses', coursesRoutes())

    router.use('/feedback', feedbackRoutes())

    return router
}

module.exports = routes
