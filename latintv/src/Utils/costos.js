const baseCost = (categorie , extra , recognize) => {
    const prices = (recognize)? [3200,4200,7200] : [ 3000, 4000, 7000];
    switch(categorie) {
        case 'regular':
            return prices[0];
        case 'prime':
            return prices[1];
        case 'super-prime':
            return prices[2];
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

