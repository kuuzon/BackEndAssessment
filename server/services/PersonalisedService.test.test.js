//Test is separated to isolate the getUsersFavouriteUni function and ensure it functions optimally without being interfered by functionality of the getData() method.

jest.mock('./PersonalisedService');

const PersonalisedService = require('./PersonalisedService'); 

const personalisedService = new PersonalisedService;

test('getUsersFavouriteUni() to return favourite Uni of the corresponding user shortname(Alex_Bicknell)', async () => {
    const mostviewedUni = await personalisedService.getUsersFavouriteUni();
    expect(mostviewedUni).toStrictEqual("Melbourne_University")
})