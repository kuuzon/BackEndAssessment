const express = require('express');

const coursesRoutes = require ('./courses');
const feedbackRoutes = require ('./feedback');

const router = express.Router();

module.exports = (param)=> {
    
    const { coursesService } = param; //Deconstructs speakerService from param (which contains Services module)
    const { personalisedService } = param; //Deconstructs personalisedService from param (which contains Services module)
    
    router.get('/', async(req, res, next) => {
        
        const coursesList = await coursesService.getList();
        // const notesList = await coursesService.getNotes();

        const usersFavouriteUni = await personalisedService.getUsersFavouriteUni("Alex_Bicknell"); //Method which sets the user & fav Uni
        const favouriteUniNotes = await coursesService.getNotesForUni(usersFavouriteUni);  //Method that obtains Notes which match Uni shortname

        res.locals.notesList = favouriteUniNotes;
        
        return res.render('index', {page: 'home', coursesList});
    })

    router.use('/courses', coursesRoutes(param));

    router.use('/feedback', feedbackRoutes(param));

    return router;
}
