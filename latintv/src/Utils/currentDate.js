const date = new Date();
const year = date.getFullYear();
const _day = date.getDate();
const _month = date.getMonth()+1;

const month =  (_month < 10) ? `0${_month}` : _month.toString();
const day =  (_day < 10) ? `0${_day}` : _day.toString();
export default `${year}-${month}-${day}`
