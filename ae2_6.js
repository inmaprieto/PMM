    let us = ["Pepe", "Inma", "Raquel", "Vero", "Lolo", "Clara", "Miguel"];
    let bl = ["Raquel", "Vero", "Miguel"];
    console.log(noBanned(us,bl));

    function noBanned(users, blackListed){
        return users.filter(value => {
            return blackListed.every(currentValue => currentValue !== value);
        });
    }