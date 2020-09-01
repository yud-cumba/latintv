const baseCost = (categorie) => {
    switch(categorie) {
        case 'regular':
            return 3000;
        case 'prime':
            return 4000 ;
        case 'super-prime':
            return 7000;
    }
}

const finalCost = (time, categorie) => {
    const price = baseCost(categorie)
    switch(time){
        case 'morning':
            return price;
        case 'afternoon':
            return price*1.05;
        case 'evening':
            return price*1.15;
    }
}

export default finalCost;

