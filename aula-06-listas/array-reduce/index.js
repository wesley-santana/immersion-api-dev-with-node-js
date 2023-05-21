const { getPeoples } = require('./people-service');

Array.prototype.myReduce = function(callback, initialValue) {
    let finalValue = typeof initialValue !== undefined ? initialValue : this[0];
    for(let index = 0; index <= this.length -1; index++){
        finalValue = callback(finalValue, this[index], this);
    }
    return finalValue;
}

async function main() {
    try {
        const { results } = await getPeoples('a');
        const listHeght = results.map(function(item) {
            return parseInt(item.height);
        });

        // const totalHeight = listHeght.reduce(function(prev, next) {
        //     return prev + next;
        // });
    
        const myList = [
            ['Dolim', 'Denuyrim', 'Grulul'],
            ['Woduoron', 'Lotdu', 'Lehka'],
            ['Murkla', 'Flekou', 'Yadbtyase']
        ];

        const unionList = myList.myReduce(function(prev, next) {
            return prev.concat(next)
        }, []).join(',');

        console.log('unionList: ', unionList);

    } catch (error) {
        console.error(error);
    }    
}

main();