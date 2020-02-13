// Import
import './style/main.css'

// Event Listeners
document.getElementById("draw").addEventListener("click", function(event){
    event.preventDefault()
});
document.getElementById("sort").addEventListener("click", function(event){
    event.preventDefault()
});

// Inner HTML
//document.getElementById("sortRow").innerHTML = "Heellooo";

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