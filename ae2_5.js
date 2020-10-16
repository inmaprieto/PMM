    let arrayNum = [3,5,4,12,8,9,0];
    console.log(multipleFactorial(arrayNum));

    function multipleFactorial(values){
       // console.log(values);
        let factorial = n => {
            if (n === 0) return 1;
            return n * factorial(n -1);
        };

        return values.map(factorial);

    }