const service  = require('./people-service');

Array.prototype.myMap = function(callback) {
    const newArrayMap = [];
    for(let index = 0; index < this.length; index++) {
        const result = callback(this[index], index)
        newArrayMap.push(result);
    }
    return newArrayMap;
}

async function main() {
    try {
        const data = await service.getPeoples('a');
        const results = data.results;
        //const names = [];

        // results.forEach(people => {
        //     names.push(people.name);
        // });

        // const names = results.map(function(people) {
        //     return people.name;
        // });

       const names = results.myMap(function(people, index) {
            return {
                name: people.name,
                key: index,
            };
        });

        console.log('nomes: ', names);
    } catch (error) {
        console.error(error);
    }
}

main();