import './style/main.css'

document.getElementById("draw").addEventListener("click", function(event){
    event.preventDefault()
});
document.getElementById("sort").addEventListener("click", function(event){
    event.preventDefault()
});
// <----------------------------------^buttons^----------------->




const arrNun = [{number:4, Suit:'&clubs', id="1"}, {number:6, Suit:'&clubs', id:"1"}, {number:8, Suit:'&clubs', id:"1"}]



const bubbleSort = (arr) => {
    let wall = arr.length - 1; //we start the wall at the end of the array
    while (wall > 0){
        let index = 0;
        while (index < wall) {
          if (arr[index] > arr[index + 1]) { 
            let aux = arr[index]; 
            arr[index] = arr[index + 1];
            arr[index + 1] = aux;
          }
          index++;
          console.log(arr)
        }
        wall--;
    }
    return arr;

  
}

bubbleSort()