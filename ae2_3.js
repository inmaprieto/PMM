    let arrayNum = [5,7,2,34,12,67,1,8];
    console.log(findMininum(arrayNum));

    function findMininum(values){
        return min = Math.min.apply(null, values);
    }
