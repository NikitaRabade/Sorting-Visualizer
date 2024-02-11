/* Menu Open */
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("navbar-active");
};

addEventOnElements(navToggler, "click", toggleNavbar);


/* Header Stick */
const header = document.querySelector('[data-header]');
let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
};

const debouncedHideHeader = debounce(hideHeader, 100);

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    debouncedHideHeader();
  } else {
    header.classList.remove("active");
  }
});

/* Debounce function */
function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}


/*Main Js start here */

var generateButton = document.getElementById("generateArray");
var a_size = document.getElementById("array-size");
var array_size = a_size.value;
var a_speed = document.getElementById("array-speed");

//all Button nodelist
var Algo_buttons = document.querySelectorAll('.algorithmButton');

//to create sort button
var sort_div = document.getElementById('sort-button')
var sort_button = document.createElement('button');


var divHeights = [];      // Array to store the heights of the div elements
var divElements = [];     // Array to store the generated div elements
var marginSize;           // Variable to store the margin size
var array_container = document.getElementById("array-container");  // Container element
array_container.style = "flex-direction:row";

// Event listeners
generateButton.addEventListener("click", generate_array);
a_size.addEventListener("input", update_array_size);

//var random = Math.floor(Math.random() * (730 - 5 + 1) + 5);
//console.log(random)


function generate_array() {
  array_container.innerHTML = "";

  for (var i = 0; i < array_size; i++) {
    divHeights[i] = randomIntFromInterval(a_size.min, a_size.max);

    //console.log("divHeights[" + i + "]: " + divHeights[i]);

    divElements[i] = document.createElement("div");
    divElements[i].classList.add("array-bar");
    array_container.appendChild(divElements[i]);
    marginSize = 0.1;

    divElements[i].style = "background-color: #0077B6; width:" + (100 / array_size - (2 * marginSize)) + "%; height:" + (divHeights[i]) + "px;";
  }
}

function update_array_size() {
  array_size = a_size.value;
  generate_array();
}

//window.onload = update_array_size();
window.onload = update_array_size;

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  let random;
  do {
    random = Math.floor(Math.random() * (max - min + 1) + min);
  } while (random === 0);
  return random;

}


//Running Appropriate algorithm

/*
//adding click event to all buttons
for (var i = 0; i < Algo_buttons.length; i++) {
  Algo_buttons[i].addEventListener("click", run_Algorithm);
}
*/


//to disable buttons when running algorithm
function disable_buttons() {

  // Iterate over each element in the 'Algo_buttons' array
  for (var i = 0; i < Algo_buttons.length; i++) {

    // Remove all existing classes from the current element
    //Algo_buttons[i].classList = [];
    Algo_buttons[i].classList.add("disabledButton");

    // Disable the current button
    Algo_buttons[i].disabled = true;
  }

  // Disable the 'a_size' element
  a_size.disabled = true;

  //Disable the 'array_speed' element
  a_speed.disabled = true;

  //Disable the 'generateButton' element
  generateButton.disabled = true;

}

/*
//Run Clickable Algorithm
function run_Algorithm() {
  //first diasble all other buttons
  disable_buttons();

  // Add the "clickedButton" class to the clicked button
  this.classList.add("clickedButton");

  // Use a switch statement to determine which button was clicked based on its innerHTML
  switch (this.innerHTML) {
    case "Bubble":
      Bubble_Sort(divHeights);
      break;

    case "Insertion":
      Insertion_Sort(divHeights);
      break;

    case "Selection":
      Selection_Sort(divHeights);
      break;

    case "Merge":
      Merge_Sort(divHeights);
      break;

    case "Quick":
      Quick_Sort(divHeights);
      break;

    case "Heap":
      heap_sort(divHeights);
      break;

  }
}
*/

for (var i = 0; i < Algo_buttons.length; i++) {
  Algo_buttons[i].addEventListener("click", run_Algorithm);
}

function run_Algorithm() {
  // First, disable all other buttons
  disable_buttons();

  // Add the "clickedButton" class to the clicked button
  var clickedButton = this;
  clickedButton.classList.add("clickedButton");

  // Declare algorithmName as a local variable using let
  let algorithmName = this.innerHTML;

  // Create the "Sort" button
  sort_button.id = 'startSortButton';
  sort_button.classList.add('startSortButton');
  sort_button.textContent = 'Sort!.';

  // Append the "Sort" button to the container
  sort_div.appendChild(sort_button);

  // Add click event listener to the "Sort" button
  sort_button.addEventListener('click', function () {
    sort_button.classList.add('disabled-button');
    sort_button.disabled = true;

    switch(algorithmName) {
      case "Bubble":
        Bubble_Sort();
        break;

      case "Insertion":
        Insertion_Sort();
        break;

      case "Selection":
        Selection_Sort();
        break;

      case "Merge":
        Merge_Sort();
        break;

      case "Quick":
        Quick_Sort();
        break;

      case "Heap":
        heap_sort();
        break;
    }

    // Remove the "clickedButton" class and set algorithmName to null
    clickedButton.classList.remove("clickedButton");
    algorithmName = null;
  });
}

