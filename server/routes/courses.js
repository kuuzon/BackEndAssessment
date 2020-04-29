const express = require ('express');
const router = express.Router();

const coursesRoutes = ()=> {
    router.get('/', (req, res)=>{
        return res.render('courses')
    })

    router.get('/:university', (req, res)=>{
        return res.render('coursesdetails')
    })

    return router
}

module.exports = coursesRoutes