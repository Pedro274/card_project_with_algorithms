import "./style/main.css";

const inputValue= document.getElementById('amount')
const symbolsArr= ['&#9824;','&#9827;','&#9829;', '&#9830;'];
const numberArr= ['A',2,3,4,5,6,7,8,9,10,'J','Q','K',];
const arr_to_sort= [];
const generateRandomNumber= (arrLength) => Math.floor(Math.random()*arrLength);

const generateObject= (numberInput) => {
    for( let i = 0; i < numberInput; i++){
        const symbolToShow= symbolsArr[generateRandomNumber(symbolsArr.length)];
        const numberToShow= numberArr[generateRandomNumber(numberArr.length)];
        const idValue= (numberToShow === "A")? 1 : (numberToShow === "J")? 11 : (numberToShow === "Q")? 12 : (numberToShow === "K")? 13 : numberToShow
        const obj= {symbol: symbolToShow, number: numberToShow, id: idValue}
        arr_to_sort.push(obj)}
    };

document.getElementById('draw').addEventListener('click', generateObject(inputValue))

console.log(arr_to_sort)
