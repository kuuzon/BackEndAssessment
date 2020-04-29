const express = require ('express');
const router = express.Router();

module.exports = (param) => {
    router.get('/', async(req, res, next) => {
        
        const {feedbackService} = param;

        try{
            const feedbackList = await feedbackService.getList()

            return res.render('feedback', {page: 'feedback', feedbackList})
        }catch(err){
            return next(err)
        }
    })

    //Load new feedback data (JSON) in fields
    router.post('/', async(req, res, next) => {
        try{
            const feedbackList = await feedbackService.getList();
            const fbName = req.body.fbName.trim();
            const fbTitle = req.body.fbTitle.trim();
            const fbMessage = req.body.fbMessage.trim();

            if(!fbName || !fbTitle || !fbMessage){
                return res.render('feedback', {
                    page: feedbackList,
                    error: true,
                    fbName,
                    fbTitle,
                    fbMessage,
                    feedbackList
                })
            }

            await feedbackService.addEntry(fbName, fbTitle, fbMessage);

            return res.redirect('feedback?success=true')

        }catch(err){
            return next(err)
        }
        
    })

    return router
}