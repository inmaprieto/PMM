    let arrayDatos = ["Ana", 2, "Javi", 5, "Roberto", 7, "Vanesa", 10 ];

    // Punto A
    let array1 = arrayDatos.filter(value => typeof(value) == 'string');
    console.log(array1);

    // Punto B
    let array2 = arrayDatos.filter(value => (value%2 === 0 || typeof(value) == 'number'));
    console.log(array2);