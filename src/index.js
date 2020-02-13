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
var points = [40, 100, 1, 5, 25, 10];
document.getElementById("sortRow").innerHTML = points;  

function myFunction1() {
  points.sort();
  document.getElementById("sortRow").innerHTML = points;
}
function myFunction2() {
  points.sort(function(a, b){return a - b});
  document.getElementById("sortRow").innerHTML = points;
}