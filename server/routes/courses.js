const express = require ('express');
const router = express.Router();

const coursesRoutes = ()=> {
    router.get('/', (req, res)=>{
        return res.send('Courses page')
    })

    router.get('/:university', (req, res)=>{
        return res.send('Courses page')
    })

    return router
}

module.exports = coursesRoutes