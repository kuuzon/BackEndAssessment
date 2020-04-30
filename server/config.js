const path = require ('path');

module.exports = {
    development: {
        sitename: 'Classnotes [Development]',
        data: {
            courses: path.join(__dirname, 'data/courses.json'),
            feedback: path.join(__dirname, 'data/feedback.json')
        }
    },

    production: {
        sitename: 'Classnotes',
        data: {
            courses: path.join(__dirname, 'data/courses.json'),
            feedback: path.join(__dirname, 'data/feedback.json')
        }
    }
}