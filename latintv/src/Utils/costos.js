import { getTvProgram, getUser } from "../firebase/firestore";

const tarifaBasica = (categorie , recognize) => {
    const prices = (recognize)? [3200,4200,7200] : [ 3000, 4000, 7000];
    console.log(categorie);
    console.log(recognize)
    switch(categorie) {
        case 'regular':
            return prices[0];
        case 'prime':
            return prices[1];
        case 'super prime':
            return prices[2];
        default:
            return prices[0];
    }
}

const recarga = (time, price) => {
    console.log(time.getHours())
    console.log(price);
    if((time.getHours())>12 && (time.getHours())<=16){
        return [price*0.05, '5%'];
    } else if ((time.getHours())>16) {
        return [price*0.15, '15%'];;
    }
    return ['0.00', ''];
}


const costProgramById = (programId ,userId, time) => 
    getTvProgram(programId)
        .then((program) => {
           console.log(program);
           return getUser(userId)
           .then((user) => {
               const tarifaBase = parseInt(tarifaBasica(program.categoria, user.recognize));
               const recargo = parseInt(recarga(time, tarifaBasica(program.categoria, user.recognize))[0]);
               const percentage = recarga(time, tarifaBasica(program.categoria, user.recognize))[1];
               const igv = tarifaBasica(program.categoria, user.recognize)*0.18;
               return {
               tarifaBase,
               recargo,
               percentage,
               igv,
               total: tarifaBase+recargo+igv
           }})
    })
export default costProgramById;

