const express = require ('express');
const path = require('path'); 
const bodyParser = require ('body-parser')

const createErrors = require ('http-errors'); 
const routes = require('./routes/routes');
const configs = require('./config')

//Load Services Modules
const CoursesService = require ('./services/CoursesService');
const FeedbackService = require ('./services/FeedbackService');

//Starting app & development mode
const app = express();
const config = configs[app.get('env')];

console.log(config.sitename)  //Testing the current development environment

//Creating Objects from class modules
const coursesService = new CoursesService(config.data.courses);
const feedbackService = new FeedbackService (config.data.feedback);


//Development Environment Conditions
app.set('view engine', 'ejs')
if(app.get('env') === 'development'){
    app.locals.pretty = true
}

//Routing & Services
app.use('/', routes())

//Setup of Express & Views
app.use(express.static('public'))

app.set('views', path.join(__dirname, './views'))

//Pass Services as param to the routes
app.use('/', routes({
    coursesService: coursesService,
    feedbackService: feedbackService
}))

//Error Functions
app.use((req, res, next)=>{                              
    return next(createErrors(404, 'File not found'))     
});

app.use((req, res, next)=>{
    res.locals.message = err.message
    const status = err.status || 500
    res.locals.status = status
    res.locals.error = app.get('env') === "development" ? err : {}
    res.status(status)
    res.send(err)
});

app.listen(3000);