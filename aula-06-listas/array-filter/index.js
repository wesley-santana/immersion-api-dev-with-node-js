const { getPeoples } = require("./people-service");

Array.prototype.myFilter = function(callback) {
        const list = [];
        for(index  in this){
            const item = this[index];
            const result = callback(item, index, this);
             
            // 0, null, "", undefined, false 
            if(!result) continue;
            list.push(item)
        }
        return list;
}

async function main() {
    try {
        const { results } = await getPeoples('a');
        // const familyLars = results.filter(function(item) {
        //     return item.name.toLowerCase().indexOf('lars') !== -1;
        // });

        const familyLars = results.myFilter((item) => item.name.toLowerCase().indexOf('lars') !== -1);
        

        const names = familyLars.map((people) =>  people.name);
        console.log('names', names);

    } catch (error) {
        console.error(error)
    }
}


main();