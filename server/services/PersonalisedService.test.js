//Tests: 

//(1)Testing specific personalisedService.getData() function to ensure it is returning the correct parsed .json data ("users.json")

//(2)Testing specific personalisedService.getUsersFavouriteUni(shortname) function to ensure it is returning the favourite Uni of the designated User (Alex Bicknell) within users.json 

//ADDITIONAL: Test(2) has been run as an isolated test (PersonalisedService.test.test.js via a mock user module to isolate testing functionality of getUsersFavouriteUni()]


const PersonalisedService = require('./PersonalisedService');

const configs = require('../config');
const config = configs['development'];

const personalisedService = new PersonalisedService(config.data.users);

test('getData should return the users.json data array', async () => {
    const data = await personalisedService.getData();
    expect(data).toStrictEqual(
        {
            "users": [{
                "name": "Alex Bicknell",
                "shortname" : "Alex_Bicknell",
                "mostviewedUni" : "Melbourne_University"
            }]
        }
    );
})

test('getUsersFavouriteUni() to return favourite Uni of the corresponding user shortname(Alex_Bicknell)', async () => {
        const mostviewedUni = await personalisedService.getUsersFavouriteUni();
        expect(mostviewedUni).toStrictEqual("Melbourne_University")
})