const date = new Date();
const year = date.getFullYear();
const day = date.getDate();
const _month = date.getMonth()+1;

const month =  (_month < 10) ? `0${_month}` : _month.toString();

export default `${year}-${month}-${day}`
