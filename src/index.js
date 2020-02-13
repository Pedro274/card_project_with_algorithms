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

// Import
import './style/main.css'

// Event Listeners
document.getElementById("draw").addEventListener("click", function(event){
    event.preventDefault()
});
document.getElementById("sort").addEventListener("click", function(event){
    event.preventDefault()
});


// BubbleSort
let array1 = [3, 2, 4, 5, 7, 6, 8, 9, 10,"A", "J", "Q", "K"];

const bubbleSort = (arr) => {
    let wall = arr.length - 1; //we start the wall at the end of the array
    while (wall > 0){
        let index = 0;
        while (index < wall) {
          //compare the adjacent positions, if the right one is bigger, we have to swap
          if (arr[index] > arr[index + 1]) { 
            let aux = arr[index]; 
            arr[index] = arr[index + 1];
            arr[index + 1] = aux;
            document.getElementById('sortRow').innerHTML += (arr);
          }
          index++;
        }
        wall--; //decrease the wall for optimization
    }
  return arr;
  
};

bubbleSort(array1)
