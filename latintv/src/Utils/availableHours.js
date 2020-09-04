const hourIntervales = (horario) => {
    const numberIntervales = Math.floor((horario[1]-horario[0])*6); // min/10
    const hours = (Array.from(Array(numberIntervales).keys())).map((i) => {
        const hour = Math.floor(horario[0]);
        const minutes = ((horario[0]-hour)*60)+(i*10);
        const endMinutes = ((horario[0]-hour)*60)+((i+1)*10);
        const _min = (minutes >=60)? minutes%60 : minutes;
        // const _Min = (_min===0)? '00': _min;
        const _endMin = (endMinutes >=60)? endMinutes%60 : endMinutes;
        // const _EndMin = (_min===0)? '00': _endMin;
        const _hour = (minutes >=60)? hour+Math.floor(minutes/60): hour;
        const _endHour = (endMinutes >=60)? hour+Math.floor(endMinutes/60): hour;
        // const final = ((i+1)*10%60===0 && i*10!==0)? `${horario[0]+1}:${(i+1)*10%60}`:`${horario[0]}:${(i+1)*10}`
        return [`${_hour}:${_min}`,`${_endHour}:${_endMin}`];
    });
    return hours
};
export default hourIntervales;