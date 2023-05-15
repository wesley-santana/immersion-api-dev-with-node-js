const peopleService = require('./people-service');


async function main() {
    try {
        const data  = await peopleService.getPeoples('sky');
        const results = data.results;
        const names = [];

        // console.time('tempo com for');
        
        // for (let index = 0; index < results.length; index++) {
        //     names.push(results[index].name);
        // }

        // console.timeEnd('tempo com for');

        console.time('tempo com for in');

        for(let i in results) {
            const people = results[i];
            names.push(people.name)
        };

        console.timeEnd('tempo com for in');

        // console.time('tempo com for of');
        // for(people of results) {
        //     names.push(people.name);
        // }
        // console.timeEnd('tempo com for of');

        //tempo com for: 0.272ms
        //tempo com for in: 0.058ms
        //tempo com for of: 0.296ms

        console.log('name: ', names)

    } catch (error) {
        console.error(error);
    }
}


main();