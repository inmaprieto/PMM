    let arrayNumbers = [3,15,2,45,20];
    let arrayEmpty = [];

    console.log(average(arrayNumbers));
    console.log(average(arrayEmpty));

    function average(dataArray) {
        if (dataArray.length === 0){
            return undefined;
        }else {
            let contador = (acumulador, valor) => acumulador + valor;
            let resultado = dataArray.reduce(contador);
            return resultado / dataArray.length;
        }
    }