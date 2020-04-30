const express = require('express');
const router = express.Router();

module.exports = (param) => {
    
    const {feedbackService} = param;
    
    router.get('/', async (req, res, next) => {
        
        //Passes in feedback.json data into variable (Left out of try-catch to prevent scope issues)
        const feedbackList = await feedbackService.getList()

            try{
                console.log(feedbackList)
                return res.render('feedback', {
                    page: 'feedback', 
                    feedbackList, 
                    success: req.query.succes,
                });
            }catch(err){
                return next(err)
            }
    })

    //Load new feedback data (JSON) in fields
    router.post('/', async(req, res, next) => {
        try{
            const feedbackList = await feedbackService.getList();
            console.log(req.body)

            //Obtains & formats/cleans user feedback field entries
            const fbName = req.body.fbName.trim();
            const fbTitle = req.body.fbTitle.trim();
            const fbMessage = req.body.fbMessage.trim();

            //Partial error in field completion by user (if NOT fbName OR NOT fbTitle OR NOT fbMessage, return this output)
            if(!fbName || !fbTitle || !fbMessage){
                return res.render('feedback', 
                {
                    page: feedback,
                    error: true,
                    fbName,
                    fbTitle,
                    fbMessage,
                    feedbackList
                })
            }

            //Function to write data to JSON
            await feedbackService.addEntry(fbName, fbTitle, fbMessage);

            //Redirect user to page to confirm success completion
            return res.redirect('feedback?success=true')

        }catch(err){
            return next(err)
        }
        
    })

    return router

}