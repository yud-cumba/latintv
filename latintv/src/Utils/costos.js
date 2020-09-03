import { getTvProgram, getUser } from "../firebase/firestore";

const tarifaBasica = (categorie , recognize) => {
    const prices = (recognize)? [3200,4200,7200] : [ 3000, 4000, 7000];
    switch(categorie) {
        case 'regular':
            return prices[0];
        case 'prime':
            return prices[1];
        case 'super prime':
            return prices[2];
    }
}

const recargo = (time, price) => {
    if((time.getHours())>12 && (time.getHours())<=16){
        return price*0.05;
    } else if ((time.getHours())>16) {
        return price*0.15;;
    }
    return '0.00';
}


const costProgramById = (programId ,userId, time) => 
    getTvProgram(programId)
        .then((program) => {
           getUser(userId)
           .then((user) => ({
               tarifaBasica : tarifaBasica(program.categoria, user.recognize),
               recargo: recargo(time, tarifaBasica(program.categoria, user.recognize)),
               igv: tarifaBasica(program.categoria, user.recognize)*0.18
           }))
    })
export default costProgramById;

