//Mock PersonalisedService to exclude the getData() function from testing, to ensure the getUsersFavouriteUni is functioning as intended

class PersonalisedService {

    getData = () => {
        return Promise.resolve({
                "users": [{
                    "name": "Alex Bicknell",
                    "shortname" : "Alex_Bicknell",
                    "mostviewedUni" : "Melbourne_University"
                }]
        })
    };

    //Tested Method
    async getUsersFavouriteUni() {
        const data = await this.getData();
        const user = await data.users.find((user) => {
            return user.shortname === 'Alex_Bicknell';  //Work around: No login / user definition functions on the site
        });

        if(!user || !user.mostviewedUni) return null;
        return user.mostviewedUni;
    }
}

module.exports = PersonalisedService