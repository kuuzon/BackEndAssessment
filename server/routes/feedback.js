const express = require ('express');
const router = express.Router();

const feedbackRoutes = ()=> {
    router.get('/', (req, res)=>{
        return res.send('Feedback page')
    })
    
    return router
}

module.exports = feedbackRoutes