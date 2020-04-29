const express = require('express');
const router = express.Router();

const routes = ()=> {
    router.get('/', (req, res)=>{
        return res.send('Home page')
    })

    router.use('/courses', coursesRoutes())

    router.use('/feedback', feedbackRoutes())

    return router
}

module.exports = routes
