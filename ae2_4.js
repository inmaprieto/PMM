    let arrayN = [23,5,3,46,12,7];
    let numMin = 2;
    let numMax = 99;

    console.log(findGreaterThan(numMin, arrayN));
    console.log(findGreaterThan(numMax, arrayN));

    function findGreaterThan(x, values){
        let compare = Math.max.apply(null, values);
        return (compare > x);
    }

