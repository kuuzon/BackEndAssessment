const express = require ('express');
const router = express.Router();

const feedbackRoutes = ()=> {
    router.get('/', (req, res)=>{
        return res.render('feedback')
    })

    return router
}

module.exports = feedbackRoutes