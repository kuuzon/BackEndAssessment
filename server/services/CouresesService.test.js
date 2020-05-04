//Tests: Testing coursesService.getUnis() function to ensure it returns the correct .json data
const CoursesService = require('./CoursesService');

const configs = require('../config');
const config = configs['development'];

const coursesService = new CoursesService(config.data.courses);

test('getUnis should return the university names and shortnames', async () => {
    const unis = await coursesService.getUnis();
    expect(unis).toStrictEqual(
        [{
            "uni" : "University of Melbourne",
            "uni_shortname": "Melbourne_University",
        },{
            "uni" : "Monash University",
            "uni_shortname": "Monash_University",
        },{
            "uni" : "Holmesglen Institute",
            "uni_shortname": "Holmesglen",
        }]
    );
})


